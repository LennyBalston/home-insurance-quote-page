import styled from 'styled-components';

const Container = styled.div`
  display: ${(props) => props.display ? props.display : "block"};

  max-width: ${(props) => props.maxWidth};

  height: ${(props) => props.height};
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    height: ${(props) => props.mdHeight}
  } 
 
  margin-top: ${(props) => props.my && props.theme.spacing[props.my]};
  margin-top: ${(props) => props.mt && props.theme.spacing[props.mt]};

  margin-bottom: ${(props) => props.my && props.theme.spacing[props.my]};
  margin-bottom: ${(props) => props.mb && props.theme.spacing[props.mb]};

  padding: ${(props) => props.p && props.theme.spacing[props.p]};
  padding-top: ${(props) => props.py && props.theme.spacing[props.py]};
  padding-bottom: ${(props) => props.py && props.theme.spacing[props.py]};

  background-color: ${(props) =>
    props.backgroundColor && props.theme.color[props.backgroundColor]
  };

  border-radius: ${(props) => props.borderRounded && props.theme.container.border.rounded};

  border: ${(props) => 
  props.borderColor && props.theme.container.border.width + ' solid ' + props.theme[props.borderColor]};
  
  gap: ${(props) => props.gap && props.theme.spacing[props.gap]};
  row-gap: ${(props) => props.rowGap && props.theme.spacing[props.rowGap]};
  column-gap: ${(props) => props.columnGap && props.theme.spacing[props.columnGap]};

  // flex parent   
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};
  justify-content: ${(props) => props.justifyContent && props.justifyContent};
  align-items: ${(props) => props.alignItems && props.alignItems};
  
  // flex children
  flex-grow: ${(props) => props.flexGrow && props.flexGrow};

  // grid parent
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  @media (min-width: ${(props) => props.theme.breakpoint.sm}) {
    grid-template-columns: ${(props) => props.smGridTemplateColumns}
  }

  // grid children
  grid-column: ${(props) => props.gridColumn};
`;

export default Container;
