import { useCreation } from 'ahooks'

export default function Icon({
  className,
  onClick,
}: { className?: string } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  const getCls = useCreation(() => {
    const defaultVal = `text-3xl ${
      onClick ? 'hover:op-80 cursor-pointer' : 'undefined'
    }`

    return `${defaultVal} ${className}`.replaceAll('undefined', '')
  }, [className, onClick])

  if (!className) return null

  return (
    <div
      {...{
        onClick,
        className: getCls,
      }}
    />
  )
}
