// routes/sample.cjs
/**
 * @swagger
 * /sample:
 *   get:
 *     summary: Returns sample data of MCQ questions
 *     responses:
 *       200:
 *         description: A successful response returns an array of objects which represents the questions to be displayed in the form of SLPMT
 */
const express = require('express');
const router = express.Router();
const documents = [
  {
      _id: '1',
      question: "I'd always support my country, whether it was right or wrong.",
      answers: [
        {
            _id: "1",
            answer: "Strongly disagree"
        },
        {
            _id: "2",
            answer: "Disagree"
        },
        {
            _id: "3",
            answer: "Agree"
        },
        {
            _id: "4",
            answer: "Strongly agree"
        }
      ]
  },
  {
      _id: '2',
      question: "The government should heavily tax the wealthy to reduce income inequality.",
      answers: [
        {
            _id: "1",
            answer: "Strongly disagree"
        },
        {
            _id: "2",
            answer: "Disagree"
        },
        {
            _id: "3",
            answer: "Agree"
        },
        {
            _id: "4",
            answer: "Strongly agree"
        }
      ]
  },
  {
      _id: '3',
      question: "Corporations should be allowed to operate without significant government interference.",
      answers: [
        {
            _id: "1",
            answer: "Strongly disagree"
        },
        {
            _id: "2",
            answer: "Disagree"
        },
        {
            _id: "3",
            answer: "Agree"
        },
        {
            _id: "4",
            answer: "Strongly agree"
        }
      ]
  },
  {
      _id: '4',
      question: "Government decisions should always be transparent, even if it compromises national security.",
      answers: [
        {
            _id: "1",
            answer: "Strongly disagree"
        },
        {
            _id: "2",
            answer: "Disagree"
        },
        {
            _id: "3",
            answer: "Agree"
        },
        {
            _id: "4",
            answer: "Strongly agree"
        }
      ]
  },
  {
      _id: '5',
      question: "Freedom of speech should include the right to express controversial or offensive opinions.",
      answers: [
        {
            _id: "1",
            answer: "Strongly disagree"
        },
        {
            _id: "2",
            answer: "Disagree"
        },
        {
            _id: "3",
            answer: "Agree"
        },
        {
            _id: "4",
            answer: "Strongly agree"
        }
      ]
  }
];
router.get('/sample', (req, res) => {
  res.json({message: documents});
});

module.exports = router;