import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Checkbox = () => {
  const [checked, setChecked] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setChecked({
      checkbox1: isChecked,
      checkbox2: isChecked,
      checkbox3: isChecked,
      checkbox4: isChecked,
    });
  };

  return (
    <>
      <Form style={{ paddingTop: '20px' }}>
        {/* Move the Select All checkbox to the right */}
        <div className="mb-3 d-flex justify-content-end align-items-center">
          <span className="me-2">Select All</span>
          <Form.Check
            type="checkbox"
            checked={Object.values(checked).every(Boolean)}
            onChange={handleSelectAll}
            id={`select-all`}
          />
        </div>

        {/* First Row of Checkboxes */}
        <div className="mb-4 d-flex">
          <Form.Check
            label={<span style={{ marginRight: '20px' }}>Permission 01</span>}
            name="group1"
            type="checkbox"
            id={`checkbox-1`}
            checked={checked.checkbox1}
            onChange={(e) => setChecked({ ...checked, checkbox1: e.target.checked })}
            style={{ marginLeft: '10px' }} // Add margin here
            className="me-5"
            reverse
          />
          <Form.Check
            label={<span style={{ marginRight: '20px' }}>Permission 02</span>}
            name="group1"
            type="checkbox"
            id={`checkbox-2`}
            checked={checked.checkbox2}
            onChange={(e) => setChecked({ ...checked, checkbox2: e.target.checked })}
            style={{ marginLeft: '10px' }} // Add margin here
            reverse
          />
        </div>

        {/* Second Row of Checkboxes */}
        <div className="mb-3 d-flex">
          <Form.Check
            label={<span style={{ marginRight: '20px' }}>Permission 03</span>}
            name="group1"
            type="checkbox"
            id={`checkbox-3`}
            checked={checked.checkbox3}
            onChange={(e) => setChecked({ ...checked, checkbox3: e.target.checked })}
            style={{ marginLeft: '10px' }} // Add margin here
            className="me-5"
            reverse
          />
          <Form.Check
            label={<span style={{ marginRight: '20px' }}>Permission 04</span>}
            name="group1"
            type="checkbox"
            id={`checkbox-4`}
            checked={checked.checkbox4}
            onChange={(e) => setChecked({ ...checked, checkbox4: e.target.checked })}
            style={{ marginLeft: '10px' }} // Add margin here
            reverse
          />
        </div>

        {/* Space between Checkboxes and Button */}
        <div style={{ marginBottom: '150px' }}></div>

        {/* Submit Button */}
        <Button variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Checkbox;
