var express = require('express');
var router = express.Router();
const Assignment = require('../models/assignment');

router.get('/', async function (req, res) {
  try {
    const assignments = await Assignment.find().lean();

    res.render('index', {
      title: 'Assignment Tracker',
      assignments,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.get('/add', function (req, res) {
  res.render('add', {
    title: 'Add Assignment',
  });
});

router.post('/add', async function (req, res) {
  try {
    await Assignment.create({
      name: req.body.name,
      course: req.body.course,
      dueDate: req.body.dueDate,
    });

    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving assignment');
  }
});

router.get('/edit/:id', async function (req, res) {
  try {
    const assignment = await Assignment.findById(req.params.id).lean();
    if (!assignment) return res.status(404).send('Assignment not found');

    res.render('edit', {
      title: 'Edit Assignment',
      assignment,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading assignment');
  }
});

router.post('/edit/:id', async function (req, res) {
  try {
    await Assignment.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      course: req.body.course,
      dueDate: req.body.dueDate,
    });

    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating assignment');
  }
});

router.get('/delete/:id', async function (req, res) {
  try {
    await Assignment.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting assignment');
  }
});

module.exports = router;