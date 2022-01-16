import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { setFilteredAssets, setSelectedFilters } from "../actions";
import { filterAssets } from "../helpers";
import RangeSlider from "react-bootstrap-range-slider";

import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

/**
 * Displays the options for filters, but also triggers setFilteredAssets
 * @returns
 */
const FilterSelection = () => {
  const dispatch = useDispatch();
  const [rangeSliderRating, setRangeSliderRating] = useState(0);
  const [rangeSliderPrice, setRangeSliderPrice] = useState(0);
  // Handle updates in local state and then dispatch to store from useEffect. Could manage it out of redux altogether but figured this was easier
  const [filterState, setFilterState] = useState({});
  console.log("filterState", filterState);
  const assets = useSelector((state) => state.storestate.assets);
  const collection = useSelector((state) => state.storestate.collection);

  const checkFilters = () => {
    let filtersSet = false;
    let traits = Object.keys(filterState);
    traits.forEach((trait) => {
      if (filterState[trait].length > 0) {
        filtersSet = true;
      }
    });
    return filtersSet;
  };
  useEffect(() => {
    setSelectedFilters(dispatch, filterState);
    // Check if filters no filters are set. If no filters are set, set full collection back as filtered assets
    if (checkFilters(filterState)) {
      setFilteredAssets(dispatch, filterAssets(assets, filterState));
    } else {
      setFilteredAssets(dispatch, assets);
    }
  }, [filterState]);

  // Grabs traits from the collections object in state
  const getTraitFilters = () => {
    const traits = { ...collection.traits };
    const traitKeys = Object.keys(traits);
    // Flatten the traits
    traitKeys.forEach((trait) => {
      traits[trait] = Object.keys(traits[trait]);
    });
    return traits;
  };

  const traitFilters = getTraitFilters();

  // Builds check boxes
  // Takes an array
  const buildFilterOptions = (traitName, trait) => {
    console.log("test", traitName, trait);
    let filterOptions = trait.map((value) => {
      return (
        <Form.Check
          type="checkbox"
          id={value}
          label={value}
          onChange={(e) => {
            // If checked, remove it from selected filters
            let updatedFilterState = { ...filterState };
            if (e.target.checked) {
              if (updatedFilterState[trait] === undefined) {
                updatedFilterState[traitName] = [];
                updatedFilterState[traitName].push(value);
                setFilterState(updatedFilterState);
              } else {
                updatedFilterState[traitName].push(value);
                console.log("trait", trait, "value", value);
                setFilterState(updatedFilterState);
              }
            } else {
              // If unchecked, remove it
              const index = updatedFilterState[trait].indexOf(value);

              if (index > -1) {
                updatedFilterState[trait].splice(index, 1);
              }
              setFilterState(updatedFilterState);
            }
          }}
        />
      );
    });
    return <Form>{filterOptions}</Form>;
  };

  // Builds the accordion layer of filter widget
  const buildTraitFilters = () => {
    let traitTypes = Object.keys(traitFilters);
    let accordion = traitTypes.map((trait, index) => {
      return (
        <Accordion.Item eventKey={index}>
          <Accordion.Header>{trait}</Accordion.Header>
          <Accordion.Body>
            {buildFilterOptions(trait, traitFilters[trait])}
          </Accordion.Body>
        </Accordion.Item>
      );
    });
    return <Accordion>{accordion}</Accordion>;
  };

  return (
    <div className="filters">
      <p>Liked</p>
      <div>
        <Form.Check type="checkbox" label="Unliked" />
        <Form.Check type="checkbox" label="Liked" />
      </div>
      <p>Rating</p>
      <RangeSlider
        value={rangeSliderRating}
        min="1"
        max="10"
        onChange={(changeEvent) =>
          setRangeSliderRating(changeEvent.target.value)
        }
      />

      <p>Price</p>
      <RangeSlider
        value={rangeSliderPrice}
        min="0"
        max="100"
        onChange={(changeEvent) =>
          setRangeSliderPrice(changeEvent.target.value)
        }
      />
      <p>Traits</p>
      {buildTraitFilters()}
    </div>
  );
};

export default FilterSelection;
