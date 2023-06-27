import { StatisticCard } from '@ant-design/pro-components'

const { Divider } = StatisticCard

export default () => {
  return (
    <StatisticCard.Group size="small" bordered>
      <StatisticCard
        size="small"
        statistic={{
          title: 'All',
          value: 10,
        }}
      />
      <Divider />
      <StatisticCard
        size="small"
        statistic={{
          title: 'Unpublished',
          value: 5,
          status: 'default',
        }}
      />
    </StatisticCard.Group>
  )
}
