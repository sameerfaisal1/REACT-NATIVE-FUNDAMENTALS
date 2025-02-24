import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {RadioButton, Button} from 'react-native-paper';

const Assignment1 = () => {
  const quizData = [
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      answer: '4',
    },
    {
      question: 'What is 5 - 3?',
      options: ['1', '2', '3', '4'],
      answer: '2',
    },
    {
      question: 'What is 3 * 3?',
      options: ['6', '8', '9', '12'],
      answer: '9',
    },
    {
      question: 'What is 12 / 4?',
      options: ['2', '3', '4', '5'],
      answer: '3',
    },
    {
      question: 'What is 15 % 4 (remainder)?',
      options: ['1', '2', '3', '4'],
      answer: '3',
    },
    {
      question: 'What is the square of 5?',
      options: ['10', '15', '20', '25'],
      answer: '25',
    },
    {
      question: 'What is the cube of 2?',
      options: ['4', '6', '8', '10'],
      answer: '8',
    },
    {
      question: 'What is the result of 10 + 10 / 2?',
      options: ['5', '10', '15', '20'],
      answer: '15',
    },
    {
      question: 'What is 100 - 75?',
      options: ['20', '25', '30', '35'],
      answer: '25',
    },
    {
      question: 'What is the result of 6 * 7?',
      options: ['42', '36', '48', '40'],
      answer: '42',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const handleNextQuestion = () => {
    if (selectedOption) {
      if (selectedOption === quizData[currentQuestion].answer) {
        setScore(prevScore => prevScore + 1);
      }
      setAnsweredQuestions(prev => prev + 1);
      setSelectedOption(null);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowSummary(true);
      }
    } else {
      alert('Please select an option before proceeding');
    }
  };

  const handleFinishGame = () => {
    if (selectedOption) {
      if (selectedOption === quizData[currentQuestion].answer) {
        setScore(prevScore => prevScore + 1);
      }
      setAnsweredQuestions(prev => prev + 1);
    }
    setShowSummary(true);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowSummary(false);
    setSelectedOption(null);
    setAnsweredQuestions(0);
  };

  return (
    <View style={{flex: 1}}>
      <Text style={styles.header}>QUIZ</Text>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.question}>
          <Text style={styles.questiontxt}>
            Question: {quizData[currentQuestion]?.question}
          </Text>
        </View>

        <View style={styles.questionContainer}>
          <View style={styles.optionsContainer}>
            <Text style={styles.optionsHeader}>Options:</Text>
            {quizData[currentQuestion]?.options.map((option, index) => (
              <View key={index} style={styles.option}>
                <RadioButton
                  value={option}
                  status={selectedOption === option ? 'checked' : 'unchecked'}
                  onPress={() => setSelectedOption(option)}
                  color="purple"
                />
                <Text style={styles.optionText}>{option}</Text>
              </View>
            ))}
          </View>
        </View>

        <Button
          mode="contained"
          onPress={handleNextQuestion}
          style={styles.nextButton}
          labelStyle={styles.nextButtonLabel}
          disabled={!selectedOption}>
          Next Question
        </Button>

        <Button
          mode="elevated"
          onPress={handleFinishGame}
          style={styles.finishButton}
          labelStyle={styles.finishButtonLabel}>
          Finish
        </Button>

        {showSummary && (
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryHeader}>Summary</Text>
            <Text style={styles.summaryText}>
              Total Questions: {quizData.length}
            </Text>
            <Text style={styles.summaryText}>
              Questions Attempted: {answeredQuestions}
            </Text>
            <Text style={styles.summaryText}>
              Total Correct Answers: {score}
            </Text>
            <Text style={styles.summaryText}>Total Score: {score * 10}</Text>
            <Button
              mode="contained"
              onPress={handleReset}
              style={styles.resetButton}>
              Restart Quiz
            </Button>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Assignment1;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 20,
    margin: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: '#FFA500',
    width: '100%',
    textAlign: 'center',
    padding: 10,
  },
  questionContainer: {
    width: '90%',
    borderRadius: 10,
    marginTop: 10,
  },
  question: {
    backgroundColor: '#B0B0B0',
    borderRadius: 10,
    margin: 15,
  },
  questiontxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
  },
  optionsHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionsContainer: {
    backgroundColor: '#ADD8E6',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  optionText: {
    fontSize: 20,
    color: 'black',
  },
  nextButton: {
    backgroundColor: '#6A5ACD',
    borderRadius: 20,
    width: '100%',
    paddingVertical: 10,
    marginBottom: 10,
  },
  nextButtonLabel: {
    color: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
  },
  finishButton: {
    backgroundColor: '#6A5ACD',
    borderRadius: 20,
    width: '100%',
    paddingVertical: 10,
  },
  finishButtonLabel: {
    color: 'white',
    fontSize: 16,
  },
  summaryContainer: {
    width: '90%',
    backgroundColor: '#90EE90',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  summaryHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: 'red',
    paddingHorizontal: 30,
  },
});
