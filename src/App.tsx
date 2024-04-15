import React, { useState } from "react";
import styled from "styled-components";
import CardList from "./components/CardList";
import TransactionList from "./components/TransactionList";
import { colors, fonts, fontSizes } from "./theme";
import FilterInput from "./components/FilterInput";
import "./index.css";

const Container = styled.div`
  width: 60%;
  height: 100vh;
  margin: 0 auto;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: ${fontSizes.heading};
  font-family: ${fonts.primary};
  color: ${colors.fontColor};
  font-weight: 300;
  margin-bottom: 6rem;
  text-align: center;
`;

const App: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string>("");
  const [filterAmount, setFilterAmount] = useState<number>(0);
  const [cardBackgroundColor, setCardBackgroundColor] = useState<string>("");


  const cardBackgroundColors: Record<string, string> = {
      "lkmfkl-mlfkm-dlkfm": colors.private,
    "elek-n3lk-4m3lk4": colors.business,
      
    };
    /*const cardBackgroundColors: Record<string, string[]> = {
  [colors.private]: ["lkmfkl-mlfkm-dlkfm", "erem-n3lk-4m3lk4"],
  [colors.business]: ["elek-n3lk-4m3lk4"],
  // In case we would need to add more colors in the future, we can easily extend the object with new key-value pairs.
};*/

  const handleSelectCard = (cardId: string) => {
    setSelectedCard(cardId);
    setFilterAmount(0);

  
    const backgroundColor = cardBackgroundColors[cardId] || colors.private;
    setCardBackgroundColor(backgroundColor);
  };

  return (
    <Container>
      <Title>Card and Transactions Overview</Title>
      <CardList onSelectCard={handleSelectCard} />
      <FilterInput value={filterAmount} onChange={setFilterAmount} cardId={selectedCard} />
      <TransactionList cardId={selectedCard} filterAmount={filterAmount} cardBackgroundColor={cardBackgroundColor} />
    </Container>
  );
};

export default App;
