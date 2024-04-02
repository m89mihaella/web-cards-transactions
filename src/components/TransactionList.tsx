import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Transaction } from "../types/types";
import { getTransactions } from "../services/apiClient";
import { colors, fonts, fontSizes } from "../theme";

interface TransactionListProps {
  cardId: string;
  filterAmount: number;
  cardBackgroundColor: string;
}

const TransactionListUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
`;

const TransactionItem = styled.li<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TransactionDescription = styled.span`
  font-size: ${fontSizes.body};
  font-family: ${fonts.secondary};
  color: ${colors.fontColor};
`;

const TransactionAmount = styled.span`
  font-size: ${fontSizes.body};
  font-family: ${fonts.secondary};
  color: ${colors.fontColor};
`;

const TransactionList: React.FC<TransactionListProps> = ({ cardId, filterAmount, cardBackgroundColor }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function fetchTransactions() {
      const fetchedTransactions = await getTransactions(cardId);
      setTransactions(fetchedTransactions);
    }
    if (cardId) {
      fetchTransactions();
    }
  }, [cardId]);

  const filteredTransactions = transactions.filter((transaction) => transaction.amount >= filterAmount);

  return (
    <>
      {cardId ? (
        <>
          <TransactionListUl>
            {filteredTransactions.map((transaction) => (
              <TransactionItem key={transaction.id} backgroundColor={cardBackgroundColor}>
                <TransactionDescription>{transaction.description}</TransactionDescription>
                <TransactionAmount>{transaction.amount}</TransactionAmount>
              </TransactionItem>
            ))}
          </TransactionListUl>
        </>
      ) : null}
    </>
  );
};

export default TransactionList;
