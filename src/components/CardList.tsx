import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "../types/types";
import { getCards } from "../services/apiClient";
import { colors, fonts, fontSizes } from "../theme";

interface CardListProps {
  onSelectCard: (cardId: string, backgroundColor: string) => void;
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CardListUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const CardItem = styled.li<{ backgroundColor: string; hoverColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 300px;
  height: 200px;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
`;

const CardDescription = styled.p`
  font-size: ${fontSizes.body};
  font-color: ${colors.fontColor};
  font-family: ${fonts.secondary};
  padding: 0.5rem;
`;
//const errorMessage = styled.p`
const CardList: React.FC<CardListProps> = ({ onSelectCard }) => {
  const [cards, setCards] = useState<Card[]>([]);
  // const [error, setError] = useState<string | null>(null);
  // cont [loading seLoading] = useState<boolean>(true);

  useEffect(() => {
    //firrst try to fetch the cards and then to catch an error if its the case. we can display the error in a <p>
    //in the catch after catching the error we set the setError to the error message
    async function fetchCards() {
      try {
        const fetchedCards = await getCards();
        setCards(fetchedCards);

      }
      catch {
       
      
      }
    }
    fetchCards();
  }, []);

  const cardColors: { [key: string]: { backgroundColor: string; hoverColor: string } } = {
    "lkmfkl-mlfkm-dlkfm": { backgroundColor: colors.private, hoverColor: colors.privateHover },
    "elek-n3lk-4m3lk4": { backgroundColor: colors.business, hoverColor: colors.businessHover },
  };

  return (
    <Container>
      <CardListUl>
        {cards.map((card) => {
          const { backgroundColor, hoverColor } = cardColors[card.id] || { backgroundColor: colors.private, hoverColor: colors.privateHover };
          return (
            <CardItem key={card.id} onClick={() => onSelectCard(card.id, backgroundColor)} backgroundColor={backgroundColor} hoverColor={hoverColor}>
              <CardDescription>{card.description}</CardDescription>
              <CardDescription>{card.id}</CardDescription>
            </CardItem>
          );
        })}
      </CardListUl>

    </Container>
  );
};

export default CardList;
