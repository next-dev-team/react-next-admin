import AvatarDropdown from './AvatarDropdown';

export type SiderTheme = 'light' | 'dark';

const HeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  // const { navTheme, layout } = initialState.settings;

  return (
    <div>
      <ASpace>
        <ATag color={_consIsAppEnvDev ? 'orange' : 'green'} style={{ textTransform: 'uppercase' }}>
          {UMI_ENV}
        </ATag>
        <AvatarDropdown />
      </ASpace>
    </div>
  );
};
export default HeaderRight;
