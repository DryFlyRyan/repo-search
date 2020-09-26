import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { languageColorSelector } from 'Utils';

export const RepoDetailsSectionContainer = styled.section`
  flex: 0 0 auto;
  margin: 0 10px;
  min-height: 100%;
  min-width: 48%;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    flex: 1 1 auto;
    margin: 0;
  }
`;

export const RepoTitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  align-content: flex-end;
  width: 100%;
  font-size: 20px;
  line-height: 20px;
  font-weight: 400;
  margin-bottom: 30px;
`;

// This probably isn't as DRY as it could be. I'm making
// the tradeoff of having a base style fo these 🤷
export const RepoTitleIcon = styled(FontAwesomeIcon)`
  display: inline-block;
  color: rgb(88, 96, 105);
  font-size: 20px;
  /* line-height: 20px; */
  margin-right: 5px;
`;

export const RepoTitleTextLink = styled.a`
  display: inline-block;
  color: rgb(3, 102, 214);
  font-size: 20px;
  line-height: 20px;
  text-decoration-line: none;
  margin: 0 5px;
  :hover {
    text-decoration-line: underline;
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const TechDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  align-items: flex-end;
  align-content: flex-end;
  font-size: 14px;
  line-height: 14px;
  margin-top: 15px;
`

export const TechDetailText = styled.p`
  margin-right: 15px;
`;

export const LanguageDot = styled.span`
  box-sizing: border-box;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  top: 1px;
  background-color: ${({ language }) => languageColorSelector(language)};
  margin-right: 5px;
`;

export const RepoStatsContainer = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  align-items: flex-end;
  align-content: flex-end;
  font-size: 14px;
  line-height: 14px;
  margin-top: 15px;
`;

export const StatsLink = styled.a`
  display: flex;
  text-decoration-line: none;
  margin-right: 10px;
  /* margin: 0 5px; */
  :hover {
    text-decoration-line: underline;
    color: rgb(3, 102, 214);
    * {
      color: rgb(3, 102, 214);
    }
  }
`;

export const StatsIcon = styled(FontAwesomeIcon)`
  color: rgb(88, 96, 105);
  display: inline-block;
  font-size: 14px;
  margin-right: 5px;
`;

export const StatsText = styled.p`
  font-size: 14px;
  color: rgb(106, 115, 125);
  margin-right: 10px;
  > strong {
    color: rgb(36, 41, 46);
    margin-right: 2px;
  }
`;

