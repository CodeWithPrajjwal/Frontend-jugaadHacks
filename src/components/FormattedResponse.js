// import React from 'react';
// import styled from 'styled-components';

// const ResponseContainer = styled.div`
//   padding: 1rem;
//   background-color: #f9f9f9;
//   border-radius: 10px;
//   margin-bottom: 1rem;
// `;

// const SectionTitle = styled.h3`
//   font-size: 1.2rem;
//   color: #333;
//   margin-top: 1rem;
//   margin-bottom: 0.5rem;
// `;

// const List = styled.ul`
//   list-style-type: none;
//   padding: 0;
// `;

// const ListItem = styled.li`
//   margin-bottom: 0.5rem;
//   &::before {
//     content: "•";
//     color: #333;
//     display: inline-block;
//     width: 1em;
//     margin-left: -1em;
//   }
// `;

// const BoldText = styled.span`
//   font-weight: bold;
// `;

// const formatResponse = (response) => {
//   const sections = response.split('###');
//   const formattedSections = sections.map((section, index) => {
//     const [title, ...content] = section.trim().split(':');
//     return {
//       title: title.trim(),
//       content: content.join(':').trim(),
//     };
//   });
//   return formattedSections;
// };

// const FormattedResponse = ({ response }) => {
//   const formattedSections = formatResponse(response);

//   const renderContent = (text) => {
//     const parts = text.split(/(\*\*.*?\*\*)/g).filter(Boolean);
//     return parts.map((part, index) => {
//       if (part.startsWith('**') && part.endsWith('**')) {
//         return <BoldText key={index}>{part.slice(2, -2)}</BoldText>;
//       }
//       if(part.startsWith())
//       return part;
//     });
//   };

//   return (
//     <ResponseContainer>
//       {formattedSections.map((section, index) => (
//         <div key={index}>
//           {section.title && <SectionTitle>{section.title}</SectionTitle>}
//           <List>
//             {section.content.split('-').map((item, i) => {
//               const trimmedItem = item.trim();
//               if (trimmedItem) {
//                 return <ListItem key={i}>{renderContent(trimmedItem)}</ListItem>;
//               }
//               return null;
//             })}
//           </List>
//         </div>
//       ))}
//     </ResponseContainer>
//   );
// };

// export default FormattedResponse;

import React from 'react';
import styled from 'styled-components';

const ResponseContainer = styled.div`
  padding: 1rem;
  background-color: #efefef;
  border-radius: 10px;
  margin-bottom: 1rem;
  max-width: 70%;
`;

const SectionTitle = styled.div`
  font-size: 1rem;
  color: #333;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  &::before {
    content: "";
    color: #333;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const UnderLineText = styled.span`
  text-decoration: underline;
  font-weight: 500;
`;

const formatResponse = (response) => {
  const sections = response.split('###');
  const formattedSections = sections.map((section, index) => {
    const [title, ...content] = section.trim().split(':');
    return {
      title: title.trim(),
      content: content.join(':').trim(),
    };
  });
  return formattedSections;
};

const FormattedResponse = ({ response }) => {
  const formattedSections = formatResponse(response);

  const renderContent = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g).filter(Boolean);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <UnderLineText key={index}>{part.slice(2, -2)}</UnderLineText>;
      }
      return part;
    });
  };

  const formatText = (text) => {
    return text.split(/\d+\.\s/).map((part, index) => {
      if (index === 0) return part;
      return `${index}. ${part}`;
    }).join('\n');
  };

  return (
    <ResponseContainer>
      {formattedSections.map((section, index) => (
        <div key={index}>
          {section.title && <SectionTitle>{section.title}</SectionTitle>}
          <List>
            {formatText(section.content).split('\n').map((item, i) => (
              <ListItem key={i}>{renderContent(item)}</ListItem>
            ))}
          </List>
        </div>
      ))}
    </ResponseContainer>
  );
};

export default FormattedResponse;
