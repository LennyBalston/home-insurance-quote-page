import styled from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.button.primary.default.background};
  color: ${(props) => props.theme.button.primary.default.color};
  padding: ${(props) =>
    props.theme.button.paddingY + ' ' + props.theme.button.paddingX
  };
  border: ${(props) =>
    props.theme.button.border.width
    + ' solid '
    + props.theme.button.primary.default.border
  };
  border-radius: ${(props) => props.theme.button.border.rounded};
  font-size: ${(props) => props.theme.button.fontSize};
  cursor: ${(props) => props.theme.button.cursor};

  &:hover {
    border-color: ${(props) => props.theme.button.primary.hover.border};
    background-color: ${(props) => props.theme.button.primary.hover.background};
    color: ${(props) => props.theme.button.primary.hover.color};
  }

  // secondary variant
  border-color: ${(props) =>
    props.variant === 'secondary'
    && props.theme.button.secondary.default.border
  };
  background-color: ${(props) =>
    props.variant === 'secondary'
    && props.theme.button.secondary.default.background
  };
  color: ${(props) =>
    props.variant === 'secondary'
    && props.theme.button.secondary.default.color
  };
  &:hover {
    border-color: ${(props) =>
    props.variant === 'secondary'
    && props.theme.button.secondary.hover.border
  };
      background-color: ${(props) =>
    props.variant === 'secondary'
    && props.theme.button.secondary.hover.background
  };
      color: ${(props) =>
    props.variant === 'secondary'
    && props.theme.button.secondary.hover.color
  };
  }

  // tertiary variant
  border-color: ${(props) =>
    props.variant === 'tertiary' && props.theme.button.tertiary.default.border
  };
  background-color: ${(props) =>
    props.variant === 'tertiary' && props.theme.button.tertiary.default.background
  };
  color: ${(props) =>
    props.variant === 'tertiary' && props.theme.button.tertiary.default.color
  };
  &:hover {
    border-color: ${(props) =>
    props.variant === 'tertiary' && props.theme.button.tertiary.hover.border
  };
    background-color: ${(props) =>
    props.variant === 'tertiary'
    && props.theme.button.tertiary.hover.background
  };
    color: ${(props) =>
    props.variant === 'tertiary' && props.theme.button.tertiary.hover.color
  };
  }

  // fullWidth
  width: ${(props) => props.fullWidth && '100%'};
`;

export default Button;

