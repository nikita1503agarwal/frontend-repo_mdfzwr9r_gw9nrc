import Slide from './Slide'
import DownloadPPT from './DownloadPPT'

function Presentation() {
  return (
    <div className="space-y-6 md:space-y-8">
      <Slide title="Title" subtitle="AI Study Bot — Intelligent Assistant for Learning" />
      <Slide title="Introduction" points={[
        'An AI-powered assistant that helps students learn faster and smarter',
        'Provides instant explanations, study aids, and guidance across subjects',
        'Combines NLP, retrieval, and personalization to support learning goals',
      ]} />
      <Slide title="Problem Statement" points={[
        'Information overload across textbooks, notes, and the web',
        'Lack of tailored guidance for different learners',
        'Manual notes are time-consuming and hard to organize',
        'Revising efficiently is challenging without structure',
      ]} />
      <Slide title="Objectives" points={[
        'Instant explanations on-demand',
        'Automatic summaries of long content',
        'Personalized learning paths',
        'Quizzes to test understanding',
        'Progress tracking and analytics',
      ]} />
      <Slide title="System Architecture" points={[
        'User Interface',
        'NLP Engine',
        'Knowledge Base',
        'Recommendation Module',
        'Feedback Loop',
      ]} />
      <Slide title="Workflow" flow={[
        'User query', 'NLP', 'Retrieval', 'Response', 'Personalized suggestion'
      ]} />
      <Slide title="Key Features" points={[
        'Doubt solving and instant Q&A',
        'Summarization of lectures and notes',
        'Quiz generation with adaptive difficulty',
        'Progress tracking dashboards',
        'Adaptive learning recommendations',
      ]} />
      <Slide title="Use Cases" points={[
        'Exam preparation',
        'Quick revision sessions',
        'Assignments and research support',
        'Self-study and continuous learning',
      ]} />
      <Slide title="Technology Stack" points={[
        'Python for backend logic',
        'Modern NLP models (LLMs, embeddings)',
        'Vector databases for retrieval',
        'Recommendation algorithms',
        'Web frameworks for UI + APIs',
      ]} />
      <Slide title="Benefits" points={[
        'Deeper understanding with timely help',
        'Reduced study time through automation',
        '24/7 assistance and motivation',
      ]} />
      <Slide title="Limitations" points={[
        'May produce inaccuracies; verification needed',
        'Requires regular data updates',
        'Possible misunderstandings of context',
        'Internet connectivity required',
      ]} />
      <Slide title="Future Enhancements" points={[
        'Voice interaction and speech synthesis',
        'Multimodal input (images, PDFs, whiteboards)',
        'Offline mode for core features',
        'Integration with LMS platforms',
      ]} />
      <Slide title="Conclusion" points={[
        'AI Study Bot streamlines learning, clarifies doubts, and adapts to each student',
        'Boosts outcomes through explanations, quizzes, and progress insight',
        'A reliable companion for effective, continuous learning',
      ]} />

      <DownloadPPT />
    </div>
  )
}

export default Presentation;