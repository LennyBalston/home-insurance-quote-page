import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.theme.button.primary.default.background};
  color: ${(props) => props.theme.button.primary.default.color};
  padding: ${(props) =>
    props.theme.button.paddingY + ' ' + props.theme.button.paddingX
  };
  border: none;
  border-radius: ${(props) => props.theme.button.borderRadius};
  font-size: ${(props) => props.theme.button.fontSize};
  cursor: ${(props) => props.theme.button.cursor};

  &:hover {
    background-color: ${(props) => props.theme.button.primary.hover.background};
    color: ${(props) => props.theme.button.primary.hover.color};
  }

  // secondary variant
  background-color: ${(props) =>
    props.variant === 'secondary' && props.theme.button.secondary.default.background
  };
  color: ${(props) =>
    props.variant === 'secondary' && props.theme.button.secondary.default.color
  };
  &:hover {
    background-color: ${(props) => props.theme.button.secondary.hover.background};
    color: ${(props) => props.theme.button.secondary.hover.color};
  }

  // tertiary variant
  background-color: ${(props) =>
    props.variant === 'tertiary' && props.theme.button.tertiary.default.background
  };
  color: ${(props) =>
    props.variant === 'tertiary' && props.theme.button.tertiary.default.color
  };

  // fullWidth
  width: ${(props) => props.fullWidth && '100%'};
`;

export default Button;

