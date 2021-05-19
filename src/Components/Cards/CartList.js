import Cards from "react-credit-cards";

const CardList = ({ cardsList }) => {
  console.log(cardsList);
  return (
    <div className="lg:m-auto overflow-hidden lg:w-1/2">
      <ul className="inline-flex overflow-x-scroll w-full">
        {cardsList &&
          cardsList.length > 0 &&
          cardsList.map((card, index) => (
            <li key={index} className="ml-2 mr-2">
              <Cards
                cvc={card.cvc}
                expiry={card.expiry}
                focused={card.focus}
                name={card.name}
                number={card.number}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CardList;
