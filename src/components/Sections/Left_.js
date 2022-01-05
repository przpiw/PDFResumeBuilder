import React, { useContext } from 'react'
import { View, Text, Svg } from '@react-pdf/renderer'
import { ProfileContainer } from './left/ProfileContainer'
import { SVGItem } from './left/SVGItem'
import styles from '../../styles'
import { SkillItem } from './left/SkillItem'
import { BuilderContext } from '../../App'

const Socials = () => {
  const builder = useContext(BuilderContext)
  console.log(builder.getSocials().items)
  return (
    <View style={styles.socials__container}>
      {builder.getSocials().items.map((item) => {
        if (item.enabled)
          return (
            <SVGItem viewBox={item.viewBox} path={item.path} url={item.url} />
          )
      })}
    </View>
  )
}
const InfoContainer = ({ heading, ...props }) => {
  return (
    <View style={{ marginTop: '30', marginLeft: '15', marginRight: '15' }}>
      <Text
        style={{
          color: '#FFF',
          fontSize: '15',
          paddingBottom: '10',
        }}
      >
        {heading}
      </Text>
      {props.children}
    </View>
  )
}
const InfoText = ({ text, date }) => (
  <View style={{ paddingTop: '10' }}>
    <Text style={{ color: '#fff', fontSize: '11' }}>{text}</Text>
    <Text style={{ color: '#fff', fontSize: '9.5', paddingTop: '3' }}>
      {date}
    </Text>
  </View>
)

export const Left = () => {
  const builder = useContext(BuilderContext)

  return (
    <View style={styles.section__left}>
      <ProfileContainer name={builder.name} profession={builder.profession} />
      <View>
        {builder.infoState.components.map((item) => {
          if (item.type === 'Info') {
            return (
              <InfoContainer heading={item.header}>
                {item.items.map((item) => (
                  <InfoText text={item.text} date={item.date} />
                ))}
              </InfoContainer>
            )
          } else if (item.type === 'Skills') {
            return (
              <InfoContainer heading='Skills'>
                {item.items.map((item) => (
                  <SkillItem name={item.text} fillSkill={item.level} />
                ))}
              </InfoContainer>
            )
          }
        })}
        <Socials />
      </View>
    </View>
  )
}
