import { ReactNode } from 'react'


import { ReactComponent as JavaScript } from '../assets/icons/javascript.svg'

import { ReactComponent as Python } from '../assets/icons/python.svg'
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg'
import { ReactComponent as BulbIcon } from '../assets/icons/bulb.svg'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'React',
    icon: <ReactIcon />,
  },
  {
    title: 'JavaScript',
    icon: <JavaScript />,
  },
  {
    title: 'Python',
    icon: <Python />,
  },
  {
    title: 'General Knowledge',
    icon: <BulbIcon />,
  },
  
]
