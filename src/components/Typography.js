import styled from 'styled-components';

const Typography = styled.p`
  color: ${(props) => props.theme.font.paragraph.color};
  color: ${(props) => props.color && props.theme[props.color]};
  font-size: ${(props) => props.theme.font.paragraph.size};
  font-size: ${(props) => props.fontSize && props.theme.font.size[props.fontSize]};
  font-weight: ${(props) => props.theme.font.weight.normal};
  line-height: ${(props) => props.lineHeight};
  display: block;
`;

export default Typography;
