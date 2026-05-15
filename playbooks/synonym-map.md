---
title: The Synonym Map — how to stop AI screeners filtering out your best candidates
date: 2026-05-07
status: Live · Vol. 01
readingTime: 12 min
dek: A working keyword map for AI screeners hiring across ML, robotics, and quantum. 60 skill clusters with every synonym, abbreviation, and academic-versus-industry variant. Refresh quarterly — terminology drifts faster than the screener's training data.
---

There's a candidate I keep thinking about.

A senior ML engineer with seven years at a frontier lab, three papers in major venues, and a contribution graph on GitHub that any technical hiring manager would recognise as senior-level. We sourced him through Proof of Work. We put him forward for a role he was, on paper and in practice, perfect for.

The client's AI screener rejected him at the first hurdle. Score: 41 out of 100.

When we pulled the screener's reasoning, the gap was visible immediately. The job description used "LLM," "RAG," "fine-tuning." His CV used "foundation models," "retrieval-augmented generation," "PEFT." Same skills. Different words. The screener — trained on a corpus that overweighted one vocabulary over the other — couldn't see they were the same thing.

We re-submitted the CV with the synonyms expanded inline. Same candidate, same skills, same experience. New score: 87. He got the interview. He got the offer.

That gap — between what a candidate is and what a screener sees — is what this playbook closes.

<div class="stat-row">
<div class="stat"><span class="stat-number">60</span><span class="stat-label">Skill clusters mapped</span></div>
<div class="stat"><span class="stat-number">28</span><span class="stat-label">Client briefs tested across</span></div>
<div class="stat"><span class="stat-number">47</span><span class="stat-label">AI/ML placements audited</span></div>
</div>

## What this is

A working reference map for AI screening tools, covering the three domains I source most: machine learning, robotics, and quantum. Each skill has a primary term and every synonym, abbreviation, academic variant, and industry variant I've seen across 28 client briefs and 47 audited placements.

You use it two ways.

**Auditing a screener before you trust it.** Take five real CVs of candidates you'd hire, run them through the screener, and check the score variance when you swap industry terms for academic ones. If the variance is above 20 points on the same candidate, the screener is unfit for the role and the map shows you which terms to add to the job description's keyword field to neutralise the bias.

**Briefing AI-assisted sourcing tools.** Most sourcing tools take a job description and expand it into a search string. Their expansion is often shallow — "machine learning" might pull "ML" but miss "statistical learning" entirely. Feeding the relevant cluster from this map into the tool's seed keywords produces a measurably broader longlist.

Refresh the map quarterly. Terminology in this field drifts faster than any screener's training data — what was "foundation model" in 2023 became "frontier model" by 2025, and the screener trained on 2023 corpora will quietly miss the 2025 vocabulary.

## How to use this

Three steps.

**One. Identify which cluster the role sits in.** Most ML roles touch 4–8 of the 25 clusters in section one. A senior LLM engineer role typically hits clusters 13 (LLM), 14 (RAG), 15 (Prompt Engineering), 16 (Fine-Tuning), 17 (Embeddings), 18 (RLHF), 23 (MLOps), and 25 (Vector Databases). A robotics perception role hits clusters 8 (CNN), 19 (CV), 20 (Object Detection), 27 (SLAM), 30 (Perception), and 38 (Kalman). Map the role before you start sourcing.

**Two. Pull the synonyms into your search and screening stack.** For each relevant cluster, the alternative terms go into:

- The screener's keyword field
- The Boolean search you run on LinkedIn, GitHub, and elsewhere
- The job description, in a "skills" or "what you'll work with" section
- The brief you give to any AI sourcing tool

**Three. Test before you deploy.** Five deliberately mistitled CVs of the same fictional candidate, scored before and after. If the screener's variance drops below 10 points across the five variants, the map is doing its job. If not, the screener is broken at a level the map can't fix — escalate to the vendor or change tools.

## Machine learning and AI — 25 clusters

1. **ML** / Machine Learning / Statistical Learning / Predictive Modelling / Data Mining
2. **DL** / Deep Learning / Neural Networks / Neural Nets / Deep Neural Networks
3. **Supervised Learning** / Labelled Training / Classification & Regression
4. **Unsupervised Learning** / Clustering / Pattern Discovery / Unlabelled Learning
5. **Self-Supervised Learning** / SSL / Contrastive Learning / Masked Modelling
6. **Transfer Learning** / Domain Adaptation / Pre-training & Fine-Tuning
7. **Ensemble Methods** / Gradient Boosting / XGBoost / LightGBM / CatBoost / Boosted Trees
8. **CNN** / Convolutional Neural Networks / ConvNets / Vision Models
9. **Transformer Architecture** / Attention Mechanisms / Self-Attention / Multi-Head Attention
10. **RNN** / LSTM / GRU / Recurrent Networks / Sequence Models
11. **GANs** / Generative Adversarial Networks / Diffusion Models / Generative Models
12. **NLP** / Natural Language Processing / Computational Linguistics / Text Analytics / Text Mining
13. **LLM** / Large Language Model / Foundation Model / Frontier Model / Generative AI / GenAI
14. **RAG** / Retrieval-Augmented Generation / Retrieval Augmented Generation / Hybrid Search
15. **Prompt Engineering** / Prompt Design / In-Context Learning / Few-Shot Learning
16. **Fine-Tuning** / PEFT / LoRA / QLoRA / DPO / Parameter-Efficient Fine-Tuning
17. **Embeddings** / Vector Embeddings / Sentence Embeddings / Dense Representations
18. **RLHF** / Reinforcement Learning from Human Feedback / Preference Learning / Alignment / Constitutional AI
19. **CV** / Computer Vision / Image Recognition / Visual Recognition / Image Understanding
20. **Object Detection** / Instance Segmentation / Semantic Segmentation / YOLO / DETR / Mask R-CNN
21. **Speech & Audio** / ASR / Automatic Speech Recognition / Speech-to-Text / TTS / Audio Models
22. **RL** / Reinforcement Learning / Policy Optimisation / Q-Learning / Deep RL / DQN
23. **MLOps** / ML Engineering / ML Platform / ML Infrastructure / Production ML
24. **Model Serving** / Inference Pipelines / Model Deployment / Online Inference
25. **Vector Databases** / Vector Stores / Pinecone / Weaviate / Qdrant / Vector Search

## Robotics — 20 clusters

26. **Robotics** / Autonomous Systems / Cyber-Physical Systems
27. **SLAM** / Simultaneous Localisation and Mapping / Visual SLAM / V-SLAM / LiDAR SLAM
28. **Motion Planning** / Path Planning / Trajectory Optimisation / RRT / A*
29. **ROS** / Robot Operating System / ROS2 / Noetic / Humble
30. **Robotic Perception** / 3D Perception / Sensor Fusion / Point Cloud Processing
31. **Manipulation** / Grasping / Dexterous Manipulation / End-Effector Control / Pick-and-Place
32. **Mobile Robotics** / AMRs / Autonomous Mobile Robots / AGVs / Autonomous Ground Vehicles
33. **Humanoid Robotics** / Bipedal Locomotion / Legged Robots / Quadrupeds
34. **UAVs** / Drones / Quadcopters / PX4 / ArduPilot
35. **Robotic Simulation** / Gazebo / Isaac Sim / MuJoCo / PyBullet
36. **Control Systems** / Model Predictive Control / MPC / Optimal Control / LQR
37. **Kinematics & Dynamics** / Inverse Kinematics / IK / Forward Kinematics / FK / DH Parameters
38. **Kalman Filtering** / EKF / Particle Filter / State Estimation
39. **Embedded Systems** / Real-Time Systems / RTOS / Microcontroller / MCU / FreeRTOS
40. **Edge AI** / On-Device Inference / Embedded ML / TinyML
41. **Imitation Learning** / Behaviour Cloning / Learning from Demonstration / LfD
42. **Sim-to-Real Transfer** / Sim2Real / Domain Randomisation
43. **Autonomous Driving** / Self-Driving / AV Stack / Apollo / Autoware
44. **Tactile Sensing** / Force-Torque Sensing / Haptics / Soft Sensing
45. **Robot Learning** / Reinforcement Learning for Robotics / Sim-Trained Policies

## Quantum — 15 clusters

46. **Quantum Computing** / Quantum Information / QC / Quantum Engineering
47. **Quantum Algorithms** / Shor's / Grover's / Quantum Search
48. **QML** / Quantum Machine Learning / Hybrid Quantum-Classical / Variational Algorithms
49. **QAOA** / Quantum Approximate Optimisation Algorithm / Quantum Optimisation
50. **VQE** / Variational Quantum Eigensolver / Quantum Chemistry / Molecular Simulation
51. **Superconducting Qubits** / Transmon Qubits / IBM-style / Google Sycamore-style
52. **Trapped-Ion Qubits** / Atomic Qubits / IonQ-style / Quantinuum-style
53. **Photonic Qubits** / Linear Optical Quantum Computing / LOQC / PsiQuantum-style
54. **Topological Qubits** / Majorana / Anyonic Qubits / Microsoft-style
55. **Quantum Error Correction** / QEC / Surface Code / Stabiliser Codes / Fault-Tolerant Quantum
56. **Quantum Circuits** / Gate-Based Quantum / Quantum Gates / Transpilation
57. **Quantum SDKs** / Qiskit / Cirq / PennyLane / Q# / Quil
58. **Quantum Annealing** / Adiabatic Quantum / D-Wave / Ising Models
59. **Post-Quantum Cryptography** / PQC / Quantum-Safe Crypto / Lattice-Based Cryptography
60. **NISQ** / Noisy Intermediate-Scale Quantum / Near-Term Quantum

## Practitioner notes

Five things I've learned auditing these clusters across 28 client briefs.

**Academic and industry vocabularies diverge.** Researchers say "policy optimisation." Engineers say "RL." A screener trained on industry CVs will miss academic candidates, and vice versa. The map runs both vocabularies through the same cluster, so your search captures both.

**UK and US spelling matters more than people think.** "Optimisation" / "Optimization." "Modelling" / "Modeling." "Behaviour" / "Behavior." Every CV in the screener pool was written in one or the other. Add both for any role hiring across borders — which, in this field, is most of them.

**Framework rename pairs are the silent killers.** Keras became tf.keras. Torch became PyTorch. Theano went extinct, but it still appears on the legacy CVs of senior engineers who learned the field on it. If a senior CV shows Theano, that's a ten-plus-year career signal, not a disqualifier. The screener that filters on "PyTorch" alone misses these people.

**Refresh the map with the hiring manager, not from the JD.** Hiring managers know which terms are 2018-era and which are 2026-era. Job descriptions lag by 12 to 18 months because they get cloned from old roles. The manager will tell you that "RAG" was the right term in 2024 but every paper in the last six months has called the same technique something more specific. The map gets refreshed quarterly off conversations with the people doing the hiring.

**Test the screener with five deliberately mistitled CVs.** Same candidate. Different vocabulary. If the score variance is above 20 points across the five, the tool is unfit for the role and you need to expand the keyword field, fix the JD, or change vendor. This is the single most useful AI-screener test I know of, and it takes 20 minutes.

## What this does not fix

The synonym map closes the keyword gap. It does not fix the deeper problems with AI screening — bias against non-traditional career paths, over-weighting of brand names in employment history, the silent dropping of candidates whose CVs were formatted in a way the parser doesn't handle. Those are separate problems. This playbook is specifically the one I use to make sure the *vocabulary* gap is closed, because vocabulary is the most fixable of the screener failure modes.

For the rest, the answer is: don't trust a screener as the only filter on a senior role. Use it to triage volume, not to decide. The candidates worth hiring are usually the ones the screener gets wrong.

---

This map is refreshed quarterly. If you spot a term I've missed, or a synonym pair I haven't captured, reach out — I update the public version and credit the contributor. **Brendan Williams · AI Sourcing Specialist · First2 Group, Manchester.** [LinkedIn](https://www.linkedin.com/in/sourcing-strategist/).

*Last refresh: May 2026 (v2026.Q2). Next refresh due: August 2026.*
