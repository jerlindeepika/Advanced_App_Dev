import { useState } from 'react';
import PropTypes from 'prop-types';


const FaqItem = ({ item, index, faqSelected, setFaqSelected }) => {
  return (
    <div className="item bg-white shadow-md rounded-md p-3 ">
      <div className="flex items-center cursor-pointer" onClick={() => setFaqSelected(faqSelected !== index ? index : null)}>
        <div className="bg-indigo-100 text-indigo-400 w-8 h-8 md:w-10 md:h-10 rounded-md flex items-center justify-center font-bold text-lg font-display">
          <span>{index + 1}</span>
        </div>
        <div className="ml-3 md:ml-4 lg:ml-6 md:text-lg text-indigo-600">
          <span>{item.question}</span>
        </div>
      </div>
      <div className={`relative overflow-hidden transition-all duration-700 ${faqSelected === index ? '' : 'max-h-0'}`}>
        <div className="text-gray-700 ml-8 md:ml-10 pl-3 md:pl-4 lg:pl-6 py-2 space-y-3">
          {item.answer.map((ans, ansIndex) => (
            <p key={`item-ans-${ansIndex}`}>{ans}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [faqSelected, setFaqSelected] = useState(null);

  const faq = [
    {
      question: "What is Alpine.js?",
      answer: [
        "Bacon ipsum dolor amet boudin hamburger jerky spare ribs, bacon leberkas beef ribs sausage turkey pancetta tenderloin chicken.",
        "Meatball landjaeger turducken. Bacon bresaola tenderloin cow rump pork chop."
      ]
    },
    {
      question: "Is it difficult to learn?",
      answer: [
        "Boudin sausage hamburger tenderloin beef chislic prosciutto pancetta. Beef tongue pork meatloaf.",
        "Chicken pork chop turducken ground round. Shank bresaola burgdoggen short loin ham hock ham. Boudin tri-tip swine drumstick strip steak tail."
      ]
    },
    {
      question: "How can I use this code?",
      answer: [
        "Salami filet mignon strip steak venison rump chicken bresaola. Shank flank tongue ribeye. Beef pork chop sirloin venison chicken jowl.",
        "Doner corned beef kielbasa beef ribs ground round cow salami swine."
      ]
    }
  ];

  return (
    <div className="bg-gray-100 pt-10 px-3 pb-20 grid min-h-screen">
      <h1 className="text-gray-600 text-center font-bold">Smooth Accordion using React + Tailwind CSS</h1>
      <div className="my-10 max-w-2xl mx-auto space-y-4 lg:space-y-6">
        {faq.map((item, index) => (
          <FaqItem key={`item-${index}`} item={item} index={index} faqSelected={faqSelected} setFaqSelected={setFaqSelected} />
        ))}
      </div>
    </div>
  );
};

FaqItem.propTypes = {
    item: PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    faqSelected: PropTypes.number,
    setFaqSelected: PropTypes.func.isRequired,
  };

export default Faq;
