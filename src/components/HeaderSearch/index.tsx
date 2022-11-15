import type { InputRef } from 'antd'
import type { AutoCompleteProps } from 'antd/es/auto-complete'
import classNames from 'classnames'
import useMergedState from 'rc-util/es/hooks/useMergedState'

export type HeaderSearchProps = {
  onSearch?: (value?: string) => void
  onChange?: (value?: string) => void
  onVisibleChange?: (b: boolean) => void
  className?: string
  placeholder?: string
  options: AutoCompleteProps['options']
  defaultVisible?: boolean
  visible?: boolean
  defaultValue?: string
  value?: string
}

const HeaderSearch: React.FC<HeaderSearchProps> = (props) => {
  const {
    className,
    defaultValue,
    onVisibleChange,
    placeholder,
    defaultVisible,
    ...restProps
  } = props

  const inputRef = useRef<InputRef | null>(null)

  const [value, setValue] = useMergedState<string | undefined>(defaultValue, {
    value: props.value,
    onChange: props.onChange,
  })

  const [searchMode, setSearchMode] = useMergedState(defaultVisible ?? false, {
    value: props.visible,
    onChange: onVisibleChange,
  })

  return (
    <div
      className={classNames(className)}
      onClick={() => {
        setSearchMode(true)
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }}
      onTransitionEnd={({ propertyName }) => {
        if (propertyName === 'width' && !searchMode) {
          if (onVisibleChange) {
            onVisibleChange(searchMode)
          }
        }
      }}
    >
      <IconSearchOutlined
        key="Icon"
        style={{
          cursor: 'pointer',
        }}
      />
      <AAutoComplete
        key="AutoComplete"
        value={value}
        options={restProps.options}
        onChange={(completeValue) => setValue(completeValue)}
      >
        <AInput
          size="small"
          ref={inputRef}
          defaultValue={defaultValue}
          aria-label={placeholder}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (restProps.onSearch) {
                restProps.onSearch(value)
              }
            }
          }}
          onBlur={() => {
            setSearchMode(false)
          }}
        />
      </AAutoComplete>
    </div>
  )
}

export default HeaderSearch
