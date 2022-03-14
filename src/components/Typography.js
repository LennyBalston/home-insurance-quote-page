import styled from 'styled-components';

const Typography = styled.p`
  color: ${(props) =>
    props.color ? props.theme[props.color] : props.theme.font.paragraph.color
  };
  font-size: ${(props) =>
    props.fontSize ? props.theme.font.size[props.fontSize] : props.theme.font.paragraph.size
  };
  font-weight: ${(props) => props.theme.font.weight.normal};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  display: block;
  grid-column: ${(props) => props.gridColumn};
  justify-self: ${(props) => props.justifySelf};
  align-self: ${(props) => props.alignSelf};
`;

export default Typography;
