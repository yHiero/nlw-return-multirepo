import { SubmitFeedbackUseCase } from "./submit-feedbacks-use-case";

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    const submitFeedback = new SubmitFeedbackUseCase (
      { create: async () => {} },
      { sendMail: async () => {} }
    )
      
      await expect(submitFeedback.execute({
        type: 'BUG',
        comment: 'Example comment',
        screenshot: 'test,jpg',
      })).resolves.not.toThrow();
  });
});