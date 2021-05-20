import AppIcon from '@components/AppIcon';

interface IProps {}

function Logo({}: IProps) {
  const logoStyle = {
    width: '120px',
    height: '24px',
  };
  return <AppIcon type="logo" style={logoStyle} />;
}

export default Logo;
