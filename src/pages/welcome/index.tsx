const Index = () => {
  // demo auto import config/webpack/auto-import

  
  const modal = () => {
    Modal.info({ title: 'hello1' });
  };

  useEffect(() => {
    console.log('sila');
  }, []);

  useCreation(() => {
    console.log('ahook');
    return {};
  }, []);

  console.log('utils', uuid());

  return (
    <Space>
      <h1 className="text-xl text-green-600">Welcome to Umijs Admin </h1>
      <IconTeenyicons360Solid onClick={modal}/>
    </Space>
  );
};

export default Index;
