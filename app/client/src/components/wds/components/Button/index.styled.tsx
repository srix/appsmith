import styled, { css } from "styled-components";

import {
  lightenColor,
  getComplementaryGrayscaleColor,
  calulateHoverColor,
  darkenColor,
  parseColor,
} from "components/wds/utils/colors";
import { ButtonProps } from "./Button";

/**
 * creates locally scoped css variables to be used in variants styles
 *
 */
export const variantTokens = css`
  ${({ accentColor: color }: Pick<ButtonProps, "accentColor" | "variant">) => {
    if (!color) return "";

    const accentColor = parseColor(color).toString({ format: "hex" });
    const accentHoverColor = calulateHoverColor(color);
    const lightAccentColor = lightenColor(color);
    const accentActiveColor = darkenColor(accentHoverColor);
    const lightAccentHoverColor = calulateHoverColor(lightAccentColor);
    const textColor = getComplementaryGrayscaleColor(accentColor);
    const onAccentBorderColor = darkenColor(color, 0.1);
    const onAccentLightBorderColor = lightenColor(color, 0.98);
    const lightAcctentActiveColor = darkenColor(lightAccentHoverColor, 0.03);

    return css`
      --wds-v2-color-bg-accent: ${accentColor};
      --wds-v2-color-bg-accent-hover: ${accentHoverColor};
      --wds-v2-color-bg-accent-light: ${lightAccentColor};
      --wds-v2-color-bg-accent-active: ${accentActiveColor};
      --wds-v2-color-bg-accent-light-active: ${lightAcctentActiveColor};
      --wds-v2-color-bg-accent-light-hover: ${lightAccentHoverColor};

      --wds-v2-color-text-accent: ${accentColor};
      --wds-v2-color-text-onaccent: ${textColor};

      --wds-v2-color-border-accent: ${accentColor};
      --wds-vs-color-border-onaccent: ${onAccentBorderColor};
      --wds-vs-color-border-onaccent-light: ${onAccentLightBorderColor};
    `;
  }}
`;

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  overflow: hidden;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  cursor: pointer;
  outline: 0;
  gap: var(--wds-v2-spacing-4);
  padding: var(--wds-v2-spacing-2) var(--wds-v2-spacing-4);
  min-height: 32px;
  border-radius: var(--wds-v2-radii);
  box-shadow: var(--wds-v2-shadow);

  ${({ borderRadius }) => borderRadius && `--wds-v2-radii: ${borderRadius};`};
  ${({ boxShadow }) => boxShadow && `--wds-v2-shadow: ${boxShadow};`};

  &[data-loading] {
    pointer-events: none;
  }

  & [data-component="text"] {
    width: 100%;

    span {
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  ${variantTokens}

  /**
  * ----------------------------------------------------------------------------
  * variants
  * ----------------------------------------------------------------------------
  */
  &[data-variant="filled"] {
    background-color: var(--wds-v2-color-bg-accent);
    color: var(--wds-v2-color-text-onaccent);
    border-color: transparent;

    &:hover {
      background-color: var(--wds-v2-color-bg-accent-hover);
    }

    &:active {
      background-color: var(--wds-v2-color-bg-accent-active);
    }
  }

  &[data-variant="outline"] {
    border-width: 1px;
    background-color: transparent;
    color: var(--wds-v2-color-text-accent);
    border-color: var(--wds-v2-color-border-accent);

    &:hover {
      background-color: var(--wds-v2-color-bg-accent-light-hover);
    }

    &:active {
      background-color: var(--wds-v2-color-bg-accent-light-active);
    }

    &:hover:disabled {
      background-color: transparent;
    }
  }

  &[data-variant="light"] {
    background: var(--wds-v2-color-bg-accent-light);
    border-color: transparent;
    color: var(--wds-v2-color-text-accent);
    border-width: 0;

    &:hover {
      background: var(--wds-v2-color-bg-accent-light-hover);
    }

    &:active {
      background: var(--wds-v2-color-bg-accent-light-active);
    }
  }

  &[data-variant="subtle"] {
    border-color: transparent;
    color: var(--wds-v2-color-text-accent);
    border-width: 0;

    &:hover {
      background: var(--wds-v2-color-bg-accent-light-hover);
    }

    &:active {
      background: var(--wds-v2-color-bg-accent-light-active);
    }
  }

  /**
  * ----------------------------------------------------------------------------
  * psudo states
  * ----------------------------------------------------------------------------
  */
  /* // we don't use :focus-visible because not all browsers (safari) have it yet */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px white, 0 0 0 4px var(--wds-color-border-focus);
  }

  &:focus:not(:focus-visible) {
    outline: none;
    box-shadow: none;
  }

  &:hover {
    text-decoration: none;
  }

  &:is([data-disabled]),
  &:is(:disabled) {
    pointer-events: none;
    background: var(--wds-v2-color-bg-disabled);
    color: var(--wds-v2-color-text-disabled);
    box-shadow: none;
    background-image: none;
    border-color: transparent;
  }
`;