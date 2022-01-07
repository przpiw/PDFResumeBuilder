import React, { useContext } from 'react'
import { View, Text } from '@react-pdf/renderer'
import { ProfileContainer } from './left/ProfileContainer'
import { SVGItem } from './left/SVGItem'
import styles from '../../../styles'
import { SkillItem } from './left/SkillItem'
import { BuilderContext } from '../../../App'

const Socials = () => {
  const ctx = useContext(BuilderContext)

  return (
    <View style={styles.socials__container}>
      {ctx.getSocials().items.map((item, index) => {
        if (item.enabled)
          return (
            <SVGItem
              key={index}
              viewBox={item.viewBox}
              path={item.path}
              url={item.url}
            />
          )
      })}
    </View>
  )
}
const Wrapper = ({ heading, ...props }) => {
  return (
    <View style={{ marginTop: '25', marginLeft: '15', marginRight: '15' }}>
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
const EducationText = ({ text, date }) => (
  <View style={{ paddingBottom: '10' }} key={text}>
    <Text style={{ color: '#fff', fontSize: '12' }}>{text}</Text>
    <Text style={{ color: '#fff', fontSize: '9', paddingTop: '3' }}>
      {date}
    </Text>
  </View>
)

export const Left = () => {
  const ctx = useContext(BuilderContext)
  const education = ctx.getComponentData('Education')
  const skills = ctx.getComponentData('Skills')
  const profile = ctx.getComponentData('Profile')
  const contact = ctx.getComponentData('Contact')
  const certifications = ctx.getComponentData('Certifications')
  return (
    <View style={styles.section__left}>
      <ProfileContainer
        name={profile.name}
        profession={profile.profession}
        url={profile.profileImageURL}
        display={profile.display}
      />
      <View>
        <Wrapper heading={education.header}>
          {education.items.map((item, index) => (
            <EducationText key={index} text={item.degree} date={item.date} />
          ))}
        </Wrapper>
        {skills.display && (
          <Wrapper heading={skills.header}>
            {skills.items.map((item, index) => (
              <SkillItem key={index} name={item.text} fillSkill={item.level} />
            ))}
          </Wrapper>
        )}
        {certifications.display && (
          <Wrapper heading={certifications.header}>
            {certifications.items.map((item, index) => (
              <EducationText key={index} text={item.name} date={item.date} />
            ))}
          </Wrapper>
        )}
        {contact.display && (
          <Wrapper heading={contact.header}>
            {contact.items.map((item, index) => (
              <Text
                key={index}
                style={{ color: '#fff', fontSize: '12', marginBottom: '8px' }}
              >
                {item.text}
              </Text>
            ))}
          </Wrapper>
        )}
        <Socials />
      </View>
    </View>
  )
}
