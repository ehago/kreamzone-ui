import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface INavigation {
  to: string;
  navigationText: string;
}

interface IProps {
  title: string;
  navigations: INavigation[];
}

function Navigation({ title, navigations }: IProps) {
  return (
    <StyledNavigation>
      <strong className="sub-title">{title}</strong>
      <ul>
        {
          navigations.map((navigation, i) => (
            <li key={i} className="nav-item">
              <NavLink to={navigation.to} className="nav-link">
                {navigation.navigationText}
              </NavLink>
            </li>
          )) //
        }
      </ul>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.div`
  margin-top: 30px;
  &:first-child {
    margin-top: 0;
  }

  .nav-item {
    margin-top: 8px;
    &:first-child {
      margin-top: 0;
    }
  }

  .sub-title {
    margin-bottom: 12px;
    display: inline-block;
    font-size: 16px;
    letter-spacing: -0.16px;
  }
  .nav-link {
    font-size: 15px;
    letter-spacing: -0.15px;
    color: rgba(34, 34, 34, 0.5);

    &:hover {
      color: #80808080;
    }

    &.active {
      color: #222;
      font-weight: 700;
    }
  }
`;

export default Navigation;
