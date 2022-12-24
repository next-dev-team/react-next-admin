export default function HeaderContentRender() {
  const { bannerNews } = useAppStore()

  if (!bannerNews.visible) return null

  return (
    <div className="flex justify-around gap-x-4 mr-3 items-center">
      <Alert
        banner
        type="info"
        icon={<NotificationOutlined className="text-lg" />}
        style={{
          flex: 1,
          height: 35,
          maxWidth: screen.width * 0.5,
        }}
        message={
          <Marquee pauseOnHover gradient={false}>
            <IconEmojioneFlagForCambodia className="mr-2" />
            {bannerNews?.content}
          </Marquee>
        }
      />
    </div>
  )
}
