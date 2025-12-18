import { use} from 'react';

const Card = ({ CardPromise,handleSelectedCard }) => {
  const cards = use(CardPromise);

 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      {cards.map((card, index) => (
        <div onClick={handleSelectedCard}
          key={index}
          className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
        >

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
            <h3 className="text-[16px] sm:text-[18px] font-medium">
              {card.title}
            </h3>

            <span className="px-4 py-1 bg-green-300 text-green-700 flex items-center gap-2 h-7 rounded-2xl text-sm w-fit">
              <i className="fa-regular fa-circle-check"></i>
              {card.status}
            </span>
          </div>

          {/* Description */}
          <p className="text-[#627382] text-sm leading-relaxed">
            {card.description}
          </p>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-4 text-sm">

            <div className="flex justify-between sm:justify-start gap-3">
              <p className="text-[#627382]">{card.id}</p>
              <p className="text-red-600 font-medium">
                {card.priority}
              </p>
            </div>

            <div className="flex justify-between sm:justify-end gap-3">
              <p className="text-[#627382]">{card.customer}</p>
              <p className="text-[#627382] flex items-center gap-1">
                <i className="fa-regular fa-calendar"></i>
                {card.createdAt}
              </p>
            </div>

          </div>

        </div>
      ))}

    </div>
  );
};

export default Card;
