// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import BrandLogo from '../../assets/images/brand-logo.jpg'
import Car from '../../assets/images/car.jpg'
import Dish from '../../assets/images/dish.jpg'
import Mosque from '../../assets/images/mosque.jpg'
import Place from '../../assets/images/place.jpg'
import Reptile from '../../assets/images/reptile.jpg'

export const generalKnowledge: Topic = {
  topic: 'GeneralKnowledge',
  level: 'Beginner',
  totalQuestions: 15,
  totalScore: 150,
  totalTime: 600,
  questions: [
    {
      question: 'Who was the first Prime Minister of India?',
      choices: [
        'Mahatma Gandhi',
        'Sardar Vallabhbhai Patel',
        'Jawaharlal Nehru',
        'Dr. B.R. Ambedkar',
      ],
      type: 'MCQs',
      correctAnswers: ['Jawaharlal Nehru'],
      score: 10,
    },
    {
      question: 'Which city is known as the Silicon Valley of India?',
      choices: ['Hyderabad', 'Bengaluru', 'Pune', 'Chennai'],
      type: 'MCQs',
      correctAnswers: ['Bengaluru'],
      score: 10,
    },
    {
      question: 'Which is the national bird of India?',
      choices: ['Peacock', 'Sparrow', 'Kingfisher', 'Eagle'],
      type: 'MCQs',
      correctAnswers: ['Peacock'],
      score: 10,
    },
    {
      question: 'Which Indian state is famous for its tea gardens?',
      choices: ['Kerala', 'Assam', 'Punjab', 'West Bengal'],
      type: 'MCQs',
      correctAnswers: ['Assam'],
      score: 10,
    },
    {
      question: 'Which Indian river is also known as the "Sorrow of Bihar"?',
      choices: ['Ganga', 'Yamuna', 'Kosi', 'Godavari'],
      type: 'MCQs',
      correctAnswers: ['Kosi'],
      score: 10,
    },
    {
      question: 'Which festival is known as the Festival of Lights in India?',
      choices: ['Holi', 'Diwali', 'Eid', 'Navratri'],
      type: 'MCQs',
      correctAnswers: ['Diwali'],
      score: 10,
    },
    {
      question: 'Which city is known as the financial capital of India?',
      choices: ['New Delhi', 'Mumbai', 'Kolkata', 'Bangalore'],
      type: 'MCQs',
      correctAnswers: ['Mumbai'],
      score: 10,
    },
    {
      question: 'Which monument is known as the symbol of love in India?',
      choices: ['India Gate', 'Qutub Minar', 'Taj Mahal', 'Gateway of India'],
      type: 'MCQs',
      correctAnswers: ['Taj Mahal'],
      score: 10,
    },
    {
      question: 'What is the name of this reptile?',
      image: Reptile,
      choices: ['Snake', 'Turtle', 'Crocodile', 'Lizard'],
      type: 'MCQs',
      correctAnswers: ['Turtle'],
      score: 10,
    },
    {
      question: 'In which country is this historical place located?',
      image: Place,
      choices: ['China', 'Greece', 'India', 'Egypt'],
      type: 'MCQs',
      correctAnswers: ['China'],
      score: 10,
    },
    {
      question: 'This is a famous Pakistani dish. What is the name of this dish?',
      image: Dish,
      choices: ['Kebab', 'Haleem', 'Paya', 'Biryani'],
      type: 'MCQs',
      correctAnswers: ['Biryani'],
      score: 10,
    },
    {
      question: 'Which famous car is this?',
      image: Car,
      choices: ['Ford', 'Toyota', 'Mercedes', 'Honda'],
      type: 'MCQs',
      correctAnswers: ['Mercedes'],
      score: 10,
    },
    {
      question: 'To which renowned automobile brand does this logo belong?',
      image: BrandLogo,
      choices: ['Audi', 'Tesla', 'BMW', 'Hyundai'],
      type: 'MCQs',
      correctAnswers: ['Tesla'],
      score: 10,
    },
    {
      question: 'Do you recognize this iconic mosque? If so, where is it situated?',
      image: Mosque,
      choices: [
        'Faisal Mosque, Islamabad',
        'Sheikh Zayed Grand Mosque, UAE',
        'Taj Mahal, India',
        'Blue Mosque, Turkey',
      ],
      type: 'MCQs',
      correctAnswers: ['Faisal Mosque, Islamabad'],
      score: 10,
    },
    {
      question: 'Which is the largest state in India by area?',
      choices: ['Maharashtra', 'Uttar Pradesh', 'Rajasthan', 'Madhya Pradesh'],
      type: 'MCQs',
      correctAnswers: ['Rajasthan'],
      score: 10,
    },
    
  ],
}