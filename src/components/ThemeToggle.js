import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ToggleWrapper = styled(Box)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;

  .toggle-checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .toggle-slot {
    position: relative;
    height: 3.5em;
    width: 7em;
    border: 5px solid #e4e7ec;
    border-radius: 10em;
    background-color: white;
    transition: background-color 250ms;
    cursor: pointer;
  }

  .toggle-checkbox:checked ~ .toggle-slot {
    background-color: #374151;
    border-color: #1f2937;
  }

  .toggle-button {
    transform: translate(0.3em, 0.3em);
    position: absolute;
    height: 2.5em;
    width: 2.5em;
    border-radius: 50%;
    background-color: #ffeccf;
    box-shadow: inset 0px 0px 0px 0.75em #ffbb52;
    transition: background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(.26,2,.46,.71);
  }

  .toggle-checkbox:checked ~ .toggle-slot .toggle-button {
    background-color: #485367;
    box-shadow: inset 0px 0px 0px 0.75em white;
    transform: translate(3.65em, 0.3em);
  }

  .sun-icon {
    position: absolute;
    height: 2em;
    width: 2em;
    color: #ffbb52;
  }

  .sun-icon-wrapper {
    position: absolute;
    height: 2em;
    width: 2em;
    opacity: 1;
    transform: translate(0.75em, 0.75em) rotate(15deg);
    transform-origin: 50% 50%;
    transition: opacity 150ms, transform 500ms cubic-bezier(.26,2,.46,.71);
  }

  .toggle-checkbox:checked ~ .toggle-slot .sun-icon-wrapper {
    opacity: 0;
    transform: translate(3em, 0.75em) rotate(0deg);
  }

  .moon-icon {
    position: absolute;
    height: 2em;
    width: 2em;
    color: white;
  }

  .moon-icon-wrapper {
    position: absolute;
    height: 2em;
    width: 2em;
    opacity: 0;
    transform: translate(3.75em, 0.75em) rotate(0deg);
    transform-origin: 50% 50%;
    transition: opacity 150ms, transform 500ms cubic-bezier(.26,2.5,.46,.71);
  }

  .toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper {
    opacity: 1;
    transform: translate(4.75em, 0.75em) rotate(-15deg);
  }
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleWrapper>
      <label className="theme">
        <input
          className="toggle-checkbox"
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <div className="toggle-slot">
          <div className="sun-icon-wrapper">
            <LightModeIcon className="sun-icon" />
          </div>
          <div className="toggle-button" />
          <div className="moon-icon-wrapper">
            <DarkModeIcon className="moon-icon" />
          </div>
        </div>
      </label>
    </ToggleWrapper>
  );
};

export default ThemeToggle; 