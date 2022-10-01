import AvatarDropdown from './AvatarDropdown';

export type SiderTheme = 'light' | 'dark';

const HeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  // const { navTheme, layout } = initialState.settings;

  return (
    <ASpace>
       <AvatarDropdown />
    </ASpace>
  );
};
export default HeaderRight;
