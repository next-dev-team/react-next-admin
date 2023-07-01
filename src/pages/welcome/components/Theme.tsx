export default function ThemeComp() {
  const { darkMode, handleDarkTheme } = useModels('demo', [
    'darkMode',
    'handleDarkTheme',
  ])

  return (
    <ProCard bordered title="Theme">
      <Space>
        <Button onClick={handleDarkTheme} shape="round" type="primary">
          {darkMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        <GTitle level={1} type="danger">
          Heading1
        </GTitle>
        <GTitle level={2} type="secondary">
          Heading2
        </GTitle>
        <GTitle level={3} type="success">
          Heading3
        </GTitle>
        <GTitle level={4} type="warning">
          Heading4
        </GTitle>
        <GText type="danger">Text</GText>
        <GText type="secondary">Text</GText>
        <GText type="success">Text</GText>
        <GText strong type="warning">
          Text
        </GText>
        <GParagraph type="secondary">
          Paragraph Paragraph Paragraph Paragraph Paragraph
        </GParagraph>
      </Space>
    </ProCard>
  )
}
