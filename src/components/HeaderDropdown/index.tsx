import type { DropDownProps } from 'antd/es/dropdown'
import classNames from 'classnames'

export type HeaderDropdownProps = {
  overlayClassName?: string
  overlay: React.ReactNode | (() => React.ReactNode) | any
  placement?:
    | 'bottomLeft'
    | 'bottomRight'
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'bottomCenter'
} & Omit<DropDownProps, 'overlay'>

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({
  overlayClassName: cls,
  ...restProps
}) => (
  <ADropdown
    overlayClassName={classNames(cls)}
    getPopupContainer={(target) => target.parentElement || document.body}
    {...restProps}
  />
)

export default HeaderDropdown
