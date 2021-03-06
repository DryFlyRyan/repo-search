import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SidebarContainer = styled.section`
  width: 300px;
  /* border: 1px solid red; */
  padding: 0 10px;
  margin: 0;
  margin-left: 10px;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;

export const TopSectionContainer = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

export const AvatarContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    height: 85px;
    width: 85px;
    padding: 5px 10px 5px 0;
    margin-bottom: 0;
  }
`;

export const AvatarImage = styled.img`
  height: 280px;
  width: 280px;
  border-radius: 50%;
  @media only screen and (max-width: 768px) {
    height: 75px;
    width: 75px;
  }
`;

export const BottomSectionContainer = styled.div`
  @media only screen and (max-width: 768px) {
    flex: 1 1 auto;
    display: flex;
    flex-direction: row nowrap;
    flex-direction: column;
  }
`;

export const UserDetailsContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const NameContainer = styled.span`
  display: block;
  font-size: 26px;
  font-weight: 600;
  line-height: 32px;
  overflow: hidden;
  color: rgb(36, 41, 46);
`;

export const HandleContainer = styled.span`
  display: block;
  color: rgb(102, 102, 102);
  font-size: 20px;
`;

export const BioContainer = styled.div`
  margin-top: 15px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const BioText = styled.span`
  font-size: 16px;
  color: rgb(36, 41, 46);
  overflow-wrap: break-word;
  line-height: 24px;

`;

export const GithubStatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-end;
  margin-top: 15px;
  /* margin-left: 3px; */
  font-size: 14px;
  line-height: 14px;
  color: rgb(88, 96, 105);
  * {
    flex: 1 1 auto;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-left: 0;
    margin-top: 5px;
  }
`;

export const BulletSpan = styled.span`
  flex: 1 1 auto;
  @media only screen and (max-width: 768px) {
  }
`;

export const StatContainer = styled.div`
  display: flex;
  align-items: flex-end;
  align-content: flex-end;
  flex: 1 1 auto;
  @media only screen and (max-width: 768px) {
  }
`;

export const StatItem = styled.span`
  margin-left: 3px;
  > strong {
    font-weight: 600;
  }
  :first-child {
    margin: 0;
  }
`;

export const StatIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
  line-height: 24px;
`;

export const PersonalStatsContainer = styled.ul`
  width: 100%;
  list-style: none;
  list-style-position: outside;
  margin: 0;
  margin-top: 15px;
  padding: 0;
  font-size: 14px;
  overflow: hidden;
  vertical-align: text-bottom;
  white-space: nowrap;
`;

export const PersonalStatsLine = styled.li`
  list-style: none;
  list-style-position: outside;
  margin-top: 5px;
  width: 100%;
`;

export const PersonalStatsItem = styled.span`
  color: rgb(36, 41, 46);
`;

export const PersonalStatsIcon = styled(FontAwesomeIcon)`
  margin-right: 4px;
  width: 16px;
  min-width: 16px;
  max-width: 16px;
  color: rgb(106, 115, 125);
`;
