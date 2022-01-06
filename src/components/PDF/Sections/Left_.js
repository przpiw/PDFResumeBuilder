import React, { useContext } from 'react'
import { View, Text, Svg } from '@react-pdf/renderer'
import { ProfileContainer } from './left/ProfileContainer'
import { SVGItem } from './left/SVGItem'
import styles from '../../../styles'
import { SkillItem } from './left/SkillItem'
import { BuilderContext } from '../../../App'

const Socials = () => {
  const ctx = useContext(BuilderContext)

  return (
    <View style={styles.socials__container}>
      {ctx.getSocials().items.map((item) => {
        if (item.enabled)
          return (
            <SVGItem viewBox={item.viewBox} path={item.path} url={item.url} />
          )
      })}
    </View>
  )
}
const Wrapper = ({ heading, ...props }) => {
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
const EducationText = ({ degree, date }) => (
  <View style={{ paddingTop: '5' }}>
    <Text style={{ color: '#fff', fontSize: '11' }}>{degree}</Text>
    <Text style={{ color: '#fff', fontSize: '9.5', paddingTop: '3' }}>
      {date}
    </Text>
  </View>
)

export const Left = () => {
  const ctx = useContext(BuilderContext)
  const education = ctx.getComponentData('Education')
  const skills = ctx.getComponentData('Skills')
  console.log(skills)
  return (
    <View style={styles.section__left}>
      <ProfileContainer name={ctx.name} profession={ctx.profession} />
      <View>
        {/* {ctx.infoState.components.map((item) => {
          if (item.type === 'Info') {
            return (
              <InfoContainer heading={item.header}>
                {item.items.map((item) => (
                  <EducationText text={item.text} date={item.date} />
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
        })} */}
        <Wrapper heading={skills.header}>
          {skills.items.map((item) => (
            <SkillItem name={item.text} fillSkill={item.level} />
          ))}
        </Wrapper>

        <Wrapper heading={education.header}>
          {education.items.map((item) => (
            <EducationText degree={item.degree} date={item.date} />
          ))}
        </Wrapper>
        <Socials />
      </View>
    </View>
  )
}
