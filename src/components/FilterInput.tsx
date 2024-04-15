import styled from "styled-components";
import { fonts, fontSizes, colors } from "../theme";

interface FilterInputProps {
  cardId: string;
  value: number;
  onChange: (value: number) => void;
}

const InputContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.p`
  font-size: ${fontSizes.body};
  font-family: ${fonts.secondary};
  font-weight: bold;
  padding-bottom: 1rem;
`;

const Input = styled.input`
  font-size: ${fontSizes.body};
  border: 1px solid ${colors.border};
  font-family: ${fonts.secondary};
  border-radius: 5px;
  padding: 0.5rem 2rem;
  &:placeholder {
    color: ${colors.private};
    font-size: ${fontSizes.body};
    font-family: ${fonts.secondary};
  }
`;

const FilterInput: React.FC<FilterInputProps> = ({ value, onChange, cardId }) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    onChange(parseFloat(e.target.value));
  };

  return (
    <>
      {cardId  ? (
        <InputContainer >
          <Label>Amount Filter</Label>
          <Input type="number" value={value || ""} onChange={handleInputChange} placeholder="Amount" />
        </InputContainer>
      ) : null}
    </>
  );
};

export default FilterInput;
