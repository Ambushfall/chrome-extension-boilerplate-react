import React, { useEffect, useState } from 'react';
import './Options.css';
import { LS, testingKey } from '../Content/modules/localstorage';

const Options = ({ title, testing }) => {
  const [isTesting, setTesting] = useState(testing);

  const handleOnChange = () => {
    setTesting(!isTesting);
  };

  useEffect(() => {
    async function updateLS() {
      await LS.setItem(testingKey, isTesting);
    }

    updateLS();
  }, [isTesting]);

  return (
    <>
      <div className="OptionsContainer">
        {title}
        Page
        <div className="bg-red-500">
          <h1 class="text-3xl font-bold underline">Hello world!</h1>
          <ul>
            <li>
              <label htmlFor="testing">Testing</label>
              <input
                id="testing"
                checked={isTesting}
                type="checkbox"
                onChange={handleOnChange}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Options;
