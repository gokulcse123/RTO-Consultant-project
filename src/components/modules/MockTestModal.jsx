import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, AlertCircle, RefreshCw, ArrowRight, HelpCircle, ShieldAlert } from 'lucide-react';
import Modal from '../common/Modal';
import { mockQuestions } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export default function MockTestModal({ isOpen, onClose }) {
  const { t, lang } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = mockQuestions[currentIdx];
  const totalQuestions = mockQuestions.length;

  const handleSelectOption = (optIdx) => {
    if (isFinished) return;
    setSelectedAnswers(prev => ({ ...prev, [currentIdx]: optIdx }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRetake = () => {
    setCurrentIdx(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setIsFinished(false);
  };

  // Calculate score
  const correctCount = Object.entries(selectedAnswers).reduce((acc, [qIdx, chosen]) => {
    return mockQuestions[Number(qIdx)].correctAnswer === chosen ? acc + 1 : acc;
  }, 0);

  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const isPassed = percentage >= 60;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t('mockTitle')}
      subtitle={t('mockSubtitle')}
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6">
        {!isFinished ? (
          <div className="space-y-5">
            {/* Progress Bar & Header */}
            <div className="flex items-center justify-between text-xs font-semibold text-slate-600 border-b pb-3">
              <span className="text-tn-blue font-bold">
                {t('questionOf')} {currentIdx + 1} / {totalQuestions}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-mono">
                  Correct: {correctCount}
                </span>
                <span className="text-slate-400">|</span>
                <span>Pass mark: 60%</span>
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <div className="flex items-start gap-4">
                {/* Traffic sign icon representation */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-3xl shadow-sm">
                  {currentQ.symbol}
                </div>

                <div className="flex-1">
                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block mb-1">
                    Traffic Sign & Safety Rule
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {lang === 'ta' ? currentQ.questionTa : currentQ.questionEn}
                  </h4>
                  {lang === 'ta' && (
                    <p className="text-xs text-slate-500 mt-1 italic">
                      {currentQ.questionEn}
                    </p>
                  )}
                </div>
              </div>

              {/* Options List */}
              <div className="mt-5 space-y-2.5">
                {(lang === 'ta' ? currentQ.optionsTa : currentQ.optionsEn).map((optionText, optIdx) => {
                  const isSelected = selectedAnswers[currentIdx] === optIdx;
                  const isCorrect = currentQ.correctAnswer === optIdx;
                  const hasAnswered = selectedAnswers[currentIdx] !== undefined;

                  let optClass = 'border-slate-200 hover:bg-slate-100 bg-white text-slate-800';
                  if (hasAnswered) {
                    if (isCorrect) {
                      optClass = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold ring-2 ring-emerald-300';
                    } else if (isSelected && !isCorrect) {
                      optClass = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                    } else {
                      optClass = 'border-slate-200 bg-white opacity-60';
                    }
                  }

                  return (
                    <div
                      key={optIdx}
                      onClick={() => !hasAnswered && handleSelectOption(optIdx)}
                      className={`p-3.5 border rounded-xl text-xs sm:text-sm font-medium transition cursor-pointer flex items-center justify-between ${optClass}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center font-bold text-xs bg-slate-50">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{optionText}</span>
                      </div>

                      {hasAnswered && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      )}
                      {hasAnswered && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explanation note when answered */}
              {selectedAnswers[currentIdx] !== undefined && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 animate-fadeIn flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-tn-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Official Rule Explanation: </span>
                    {lang === 'ta' ? currentQ.explanationTa : currentQ.explanationEn}
                  </div>
                </div>
              )}
            </div>

            {/* Next / Finish Button */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                disabled={selectedAnswers[currentIdx] === undefined}
                onClick={handleNext}
                className="px-6 py-2.5 bg-tn-blue hover:bg-tn-darkBlue text-white font-bold text-xs rounded-xl shadow-md transition disabled:opacity-40 flex items-center gap-1.5"
              >
                <span>{currentIdx < totalQuestions - 1 ? t('nextQuestion') : t('finishExam')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Result Summary Card */
          <div className="space-y-6 text-center py-4">
            <div
              className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl shadow-lg ${
                isPassed ? 'bg-emerald-100 border-4 border-emerald-500' : 'bg-rose-100 border-4 border-rose-500'
              }`}
            >
              {isPassed ? '🏆' : '📚'}
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {isPassed ? t('congratsPass') : 'Needs Improvement / மறுமுயற்சி தேவை'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
                {isPassed ? t('passNotice') : t('failNotice')}
              </p>
            </div>

            {/* Score pill */}
            <div className="inline-flex items-center gap-6 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-xl">
              <div>
                <span className="text-xs text-slate-400 block">{t('scoreText')}</span>
                <span className="text-2xl font-extrabold text-amber-400 font-mono">
                  {correctCount} / {totalQuestions}
                </span>
              </div>
              <div className="w-px h-10 bg-slate-700" />
              <div>
                <span className="text-xs text-slate-400 block">Percentage</span>
                <span className={`text-2xl font-extrabold font-mono ${isPassed ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {percentage}%
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={handleRetake}
                className="px-5 py-2.5 border border-slate-300 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-100 flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>{t('retakeTest')}</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-tn-blue text-white font-bold text-xs rounded-xl shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
