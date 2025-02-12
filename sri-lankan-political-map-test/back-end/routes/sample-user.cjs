// routes/sample-user.cjs
/**
 * @swagger
 * /sample-user:
 *   post:
 *     summary: Creates a new user or appends a new response to an existing user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 question_id:
 *                   type: string
 *                   description: The question's id
 *                   example: 1
 *                 answer_id:
 *                   type: string
 *                   description: The chosen answer's id
 *                   example: 1
 *               required:
 *                 - question_id
 *                 - answer_id
 *     responses:
 *       200:
 *         description: A successful response sends a message and the received data back to the client.
 *       403:
 *         description: If cookies are disabled, the user is prompted to enable cookies.
 */
const router = require('./sample.cjs');
router.post('/sample-user', (req, res)=>{
    const formData = req.body;
    if (req.cookies && req.cookies.id) {
      res.send(JSON.stringify({'message':'Form data received!', 'data': `${formData}`}));
    }else{
      res.status(403).send({
          error: 'Cookies must be enabled to continue.',
          instructions: 'Please enable cookies in your browser settings.',
          links: [
            { text: 'Chrome instructions', href: 'https://support.google.com/chrome/answer/95647' },
            { text: 'Firefox instructions', href: 'https://support.mozilla.org/en-US/kb/enabling-and-disabling-cookies' }
          ]
      })
    }
});
module.exports = router;