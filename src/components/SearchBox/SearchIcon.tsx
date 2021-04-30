import AppIcon from '@components/AppIcon';

interface IProps {}

function SearchIcon({}: IProps) {
  const searchIconStyle = {
    position: 'absolute',
    top: '8px',
    left: '12px',
    width: '24px',
    height: '24px',
    fill: '#bbb',
  } as React.CSSProperties;

  return <AppIcon type="search" style={searchIconStyle} />;
}

export default SearchIcon;
