import type { ExternalLink, Publication, PublicationSection } from "./types";

function entriesFromText(
  text: string,
  links: Record<number, string> = {},
  mediaNumbers: number[] = [],
): Publication[] {
  return text
    .trim()
    .split("\n")
    .map((citation) => citation.trim())
    .filter(Boolean)
    .map((citation) => {
      const number = Number(citation.match(/^\[(\d+)\]/)?.[1]);
      const href = links[number];
      return {
        citation,
        href,
        linkLabel: href
          ? mediaNumbers.includes(number)
            ? "Media"
            : "Link"
          : undefined,
      };
    });
}

const journalLinks: Record<number, string> = {
  34: "https://doi.org/10.1109/JSEN.2026.3703802",
  33: "https://doi.org/10.1109/OJCAS.2025.3574336",
  32: "https://doi.org/10.1109/OJCAS.2025.3585654",
  31: "https://doi.org/10.1109/TIM.2025.3580838",
  30: "https://ieeexplore.ieee.org/document/10492988",
  29: "https://doi.org/10.1109/TVLSI.2024.3368355",
  28: "https://doi.org/10.1109/TCSII.2024.3369044",
  27: "https://doi.org/10.1109/TCAD.2024.3393876",
  26: "https://doi.org/10.48550/arXiv.2412.02077",
  25: "https://doi.org/10.1109/TCSI.2023.3267067",
  24: "https://doi.org/10.1063/5.0131941",
  23: "https://doi.org/10.1117/1.APN.2.6.066003",
  22: "https://doi.org/10.1109/LSSC.2022.3210768",
  21: "https://doi.org/10.1109/TCSI.2022.3169056",
  20: "https://doi.org/10.3390/jlpea12040059",
  19: "https://doi.org/10.1109/JSSC.2021.3057372",
  18: "https://doi.org/10.1109/TIM.2021.3073393",
  17: "https://doi.org/10.1109/TCSI.2020.3013709",
  16: "https://doi.org/10.1109/TCSI.2020.3007827",
  15: "https://doi.org/10.1109/TIM.2020.3003109",
  14: "https://doi.org/10.1063/5.0003020",
  13: "https://doi.org/10.1109/LSSC.2019.2931440",
  12: "https://doi.org/10.1109/TCSII.2018.2845883",
  11: "https://doi.org/10.1117/1.JMM.17.3.034501",
  10: "https://doi.org/10.1109/TCSII.2017.2786640",
  9: "https://doi.org/10.1109/TCSII.2016.2642820",
  8: "https://doi.org/10.1080/00207217.2017.1279229",
  7: "https://doi.org/10.1049/el.2016.1157",
  6: "https://doi.org/10.1049/el.2015.3664",
  5: "https://doi.org/10.1049/el.2015.3164",
  4: "https://doi.org/10.1109/JSSC.2014.2300199",
  3: "https://doi.org/10.1109/TNS.2013.2279660",
  2: "https://doi.org/10.1007/s12046-009-0039-4",
  1: "https://doi.org/10.1109/TNS.2009.2015301",
};

const journalText = `
[34] Daniel Tebbs, Sharisse Poff, Nicholas Allen, Benjamin Boyack, Roger Black, Jacob Anderson, Shea Smith, Marcus Julian, Brian Jensen, Richard Vanfleet, Robert Davis, and Shiuh-hua Wood Chiang, “Design and measurement of an active quasi-circulator system for MHz impedance plethysmography,” IEEE Sensors, vol. 26, no. 15, pp. 23279-23289, Jun. 2026.
[33] Eric Christie, Jared Marchant, Shea Smith, Long Kong, Chia-Hung Chen, and Shiuh-Hua Wood Chiang, “A review on sub-0.21-V ultra-low-supply-voltage analog-to-digital converters,” IEEE Open Journal of Circuits and Systems (OJCAS), vol. 6, pp. 228-240, Aug. 2025. (Invited paper)
[32] Sai Sanjeet, Sanchari Das, Shiuh-Hua Wood Chiang, Masahiro Fujita, and Bibhu Datta Sahoo, “Systematic design of ring VCO-based SNN—translating training parameters to circuits,” IEEE Open Journal of Circuits and Systems (OJCAS), vol. 6, pp. 283-294, Aug. 2025.
[31] Sharisse Poff, Daniel Tebbs, Nicholas Allen, Marcus Julian, Robert Davis, and Shiuh-hua Wood Chiang, “An active quasi-circulator technique for MHz impedance measurement for wearables,” IEEE Transactions on Instrumentation and Measurement (TIM), vol. 74, pp. 2011610, Jun. 2025.
[30] Taylor Barton, Shea Smith, Yu Hao, Ryan Watson, Kyle Rogers, Parker Allred, Bibhu Datta Sahoo, Nancy Fulda, Jordan Yorgason, Karl Warnick, Mau-Chung Frank Chang, Yen-Cheng Kuan, and Shiuh-hua Wood Chiang, “A subthreshold time-domain analog spiking neuron with PLL-based leak circuit and capacitive DAC synapse,” IEEE Solid-State Circuits Letters (SSCL), vol. 7, pp. 143-146, Apr. 2024.
[29] Behdad Jamadi, Shiuh-hua Wood Chiang, and Armin Tajalli, “Trade-offs in design of wide-band inverter-based amplifiers,” IEEE Transactions on Very Large Scale Integration (TVLSI) Systems, vol. 32, no. 7, pp. 1364-1368, Jul. 2024.
[28] Shea Smith, Armin Tajalli, Yen-Cheng Kuan, and Shiuh-hua Wood Chiang, “A digital background calibration circuit for coarse-fine timing mismatch in VCO-based ADCs,” IEEE Transactions on Circuits and Systems II (TCAS-II), vol. 71, no. 8, pp. 3650-3654, Aug. 2024.
[27] Taylor Barton, Shea Smith, Yixin Song, Yen-Cheng Kuan, and Shiuh-hua Wood Chiang, “Multistage charge pump design methodology for zero-crossing-based amplifiers,” IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), vol. 43, no. 10, pp. 3292-3296, Oct. 2024.
[26] Christian Carver, Jared Marchant, Benjamin Fisher, Nicholas Townsend, Tyler Stowell, Austin Barlow, Benjamin Arnesen, Shiuh-Hua Wood Chiang, and Ryan Camacho, “Integrated differential conjugate homodyne detection for quantum random number generation,” arXiv preprint arXiv:2412.02077, Dec. 2024.
[25] Alexander Petrie, Yixin Song, Whitney Kinnison, Yong Qu, Kent Layton, and Shiuh-hua Wood Chiang, “A 0.2-V 10-bit 5-kHz SAR ADC with dynamic bulk biasing and ultra-low-supply-voltage comparator,” IEEE Transactions on Circuits and Systems I (TCAS-I), vol. 70, no. 7, pp. 2722-2733, Jul. 2023.
[24] Parker Allred, Eric Christie, Yixin Song, Daniel Austin, Shiuh-hua Wood Chiang, and Aaron Hawkins, “Flow-through charge detection mass spectrometry to categorize micron-sized particles,” AIP Review of Scientific Instruments, vol. 94, no. 3, Mar. 2023.
[23] Tyler Westover, Zach Westhoff, Sharisse Poff, Nick Morrill, David Miller, Shiuh-hua Wood Chiang, Richard Vanfleet, and Robert Davis, “Miniaturized short-wavelength infrared spectrometer for diffuse light applications,” Advanced Photonics Nexus, vol. 2, no. 6, 066003, Oct. 2023.
[22] Shruti Konwar, Harshit Roy, Shiuh-hua Wood Chiang, and Bibhu Datta Sahoo, “Deterministic dithering-based 12-b 8-MS/s SAR ADC in 0.18-μm CMOS,” IEEE Solid-State Circuits Letters (SSCL), vol. 5, pp. 243-246, 2022.
[21] Yixin Song, Shea Smith, Benjamin Karlinsey, Aaron Hawkins, and Shiuh-hua Wood Chiang, “The digital-assisted charge amplifier: a digital-based approach to charge amplification,” IEEE Transactions on Circuits and Systems I (TCAS-I), vol. 69, no. 8, pp. 3114-3123, Aug. 2022.
[20] Taylor Barton, Hao Yu, Kyle Rogers, Nancy Fulda, Shiuh-hua Wood Chiang, Jordan Yorgason, and Karl F. Warnick, “Towards low-power machine learning architectures inspired by brain neuromodulatory signalling,” Journal of Low Power Electronics and Applications, vol. 12, no. 59, pp. 1-19, Nov. 2022.
[19] Eric Swindlehurst, Hunter Jensen, Alexander Petrie, Yixin Song, Yen-Cheng Kuan, Yong Qu, Mau-Chung Frank Chang, Jieh-Tsorng Wu, and Shiuh-hua Wood Chiang, “An 8-bit 10-GHz 21-mW time-interleaved SAR ADC with grouped DAC capacitors and dual-path bootstrapped switch,” IEEE Journal of Solid-State Circuits (JSSC), vol. 56, no. 8, pp. 2347-2359, Aug. 2021.
[18] Jace Rozsa, Yixin Song, Austin Kerr, Naomi Debaene, Daniel Austin, Shiuh-hua Wood Chiang, and Aaron Hawkins, “Optimizing the noise performance of multi-electrode image charge detectors constructed on printed circuit boards,” IEEE Transactions on Instrumentation and Measurement, vol. 70, no. 4, pp. 1503308, Apr. 2021.
[17] Khalil Gammoh, Cameron Peterson, David Penry, and Shiuh-hua Wood Chiang, “Linearity theory of stochastic phase-interpolation time-to-digital converter,” IEEE Transactions on Circuits and Systems I (TCAS-I), vol. 67, no. 12, pp. 4348-4359, Dec. 2020.
[16] Yong Qu, Wei Shu, Lei Qiu, Yen-Cheng Kuan, Shiuh-hua Wood Chiang, and Joseph Chang, “A low-profile high-efficiency fast battery charger with unifiable constant-current and constant-voltage regulation,” IEEE Transactions on Circuits and Systems I (TCAS-I), vol. 67, no. 11, pp. 4099-4109, Nov. 2020.
[15] Yixin Song, Jace Rozsa, Joan Magalhaes, Shea Smith, Benjamin Karlinsey, Whitney Kinnison, Elaura Gustafson, Daniel Austin, Aaron Hawkins, and Shiuh-hua Wood Chiang, “A solid-state charge detector with gain calibration using photocurrent,” IEEE Transactions on Instrumentation and Measurement, vol. 69, no. 12, pp. 9398-9407, Dec. 2020.
[14] Jace Rozsa, Yixin Song, Devon Webb, Naomi Debaene, Austin Kerr, Elaura Gustafson, Tabitha Caldwell, Halle Murray, Daniel Austin, Shiuh-hua Wood Chiang, and Aaron Hawkins, “Simulation and measurement of image charge detection with printed-circuit-board detector and differential amplifier,” AIP Review of Scientific Instruments, vol. 91, no. 5, May 2020.
[13] Eric Swindlehurst, Hunter Jensen, Alexander Petrie, Yixin Song, Yen-Cheng Kuan, Mau-Chung Frank Chang, Jieh-Tsorng Wu, and Shiuh-hua Wood Chiang, “An 8-bit 10-GHz 21-mW time-interleaved SAR ADC with grouped DAC capacitors and dual-path bootstrapped switch,” IEEE Solid-State Circuits Letters (SSCL), vol. 2, no. 9, pp. 83-86, Sep. 2019.
[12] Devon Janke, Andrew Monk, Eric Swindlehurst, Kent Layton, and Shiuh-hua Wood Chiang, “A 9-bit 10-MHz 28-µW SAR ADC using tapered bit periods and a partially interdigitated DAC,” IEEE Transactions on Circuits and Systems II (TCAS-II), vol. 66, no. 2, pp. 187-191, Feb. 2019.
[11] Andres Galan, Gregory Nordin, and Shiuh-hua Wood Chiang, “Design and characterization of a package-less hybrid PDMS-CMOS-FR4 contact-imaging system for microfluidic integration,” SPIE Journal of Micro/Nanolithography, MEMS, and MOEMS, vol. 17, no. 3, pp. 034501-1-034501-8, Jul. 2018.
[10] Nathan Whitehead, Yixin Song, and Shiuh-hua Wood Chiang, “Direct measurement of high-gain and complementary charge-steering amplifiers,” IEEE Transactions on Circuits and Systems II (TCAS-II), vol. 65, no. 6, pp. 714-718, Jun. 2018.
[9] Danilo Bustamante, Devon Janke, Eric Swindlehurst, and Shiuh-hua Wood Chiang, “High-precision, mixed-signal mismatch measurement of metal-oxide-metal capacitors,” IEEE Transactions on Circuits and Systems II (TCAS-II), vol. 64, no. 11, pp. 1272-1276, Nov. 2017.
[8] Wanyang Zhang, David Comer, and Shiuh-hua Wood Chiang, “Design of low power ultra-high voltage gain differential cascode stages,” International Journal of Electronics, vol. 104, no. 6, pp. 982-992, Jun. 2017.
[7] Shiuh-hua Wood Chiang, “Comparator offset calibration using unbalanced clocks for high speed and high power efficiency,” IET Electronics Letters, vol. 52, no. 14, pp. 1206-1207, Jul. 2016.
[6] Shiuh-hua Wood Chiang, “Charge-dumping switching scheme for successive-approximation-register analogue-to-digital converters,” IET Electronics Letters, vol. 52, no. 5, pp. 348-350, Mar. 2016.
[5] Eric Swindlehurst and Shiuh-hua Wood Chiang, “Histogram-based calibration of capacitor mismatch in SAR ADCs,” IET Electronics Letters, vol. 51, no. 25, pp. 2096-2098, Dec. 2015.
[4] Shiuh-hua Wood Chiang, Hyuk Sun, and Behzad Razavi, “A 10-bit 800-MHz 19-mW CMOS ADC,” IEEE Journal of Solid-State Circuits (JSSC), pp. 935-949, Apr. 2014.
[3] Stuart Kleinfelder, Shiuh-hua Wood Chiang, and Wei Huang, “Multi-GHz synchronous waveform acquisition with real-time pattern-matching trigger generation,” IEEE Transactions on Nuclear Science, pp. 3785-3792, Oct. 2013.
[2] Patricia Nieva, Jim Kuo, Shiuh-hua Wood Chiang, and Abdullah Syed, “A novel MOEMS pressure sensor: modeling and experimental evaluation,” Springer India, Journal Sadhana, vol. 34, pp. 615-623, Aug. 2009.
[1] Stuart Kleinfelder, Shiuh-hua Wood Chiang, Wei Huang, Ashish Shah, and Kris Kwiatkowski, “High-speed, high dynamic-range optical sensor arrays,” IEEE Transactions on Nuclear Science, vol. 56, pp. 1069-1075, Jun. 2009.
`;

const conferenceLinks: Record<number, string> = {
  44: "https://doi.org/10.1109/ISCAS66217.2026.11563027",
  43: "https://doi.org/10.1109/VLSITSA69131.2026.11527954",
  42: "https://doi.org/10.1109/IETC69527.2026.11568668",
  41: "https://doi.org/10.1109/ESSERC66193.2025.11214016",
  40: "https://doi.org/10.1109/MWSCAS53549.2025.11244561",
  39: "https://doi.org/10.1109/MWSCAS53549.2025.11244556",
  38: "https://doi.org/10.1109/MWSCAS53549.2025.11244529",
  37: "https://doi.org/10.1109/ISCAS56072.2025.11043229",
  36: "https://doi.org/10.1109/ISCAS56072.2025.11043386",
  35: "https://doi.org/10.1109/IMBioC63524.2025.10989699",
  34: "https://doi.org/10.1109/IMBioC63524.2025.10989722",
  33: "https://doi.org/10.1109/MWSCAS60917.2024.10658844",
  32: "https://doi.org/10.1109/MWSCAS60917.2024.10658818",
  31: "https://doi.org/10.1109/MWSCAS60917.2024.10658910",
  30: "https://doi.org/10.1109/ISCAS58744.2024.10557965",
  29: "https://doi.org/10.1109/IETC61393.2024.10564393",
  28: "https://opg.optica.org/abstract.cfm?uri=CLEO_AT-2024-ATh3G.3",
  27: "https://doi.org/10.2352/issn.2168-3204.2024.21.1.11",
  26: "https://doi.org/10.1109/A-SSCC58667.2023.10347931",
  25: "https://doi.org/10.1109/MWSCAS57524.2023.10406142",
  24: "https://doi.org/10.1109/MWSCAS57524.2023.10405916",
  23: "https://doi.org/10.1145/3566097.3567878",
  22: "https://doi.org/10.1109/IETC57902.2023.10152161",
  21: "https://doi.org/10.1109/IETC57902.2023.10152144",
  20: "https://doi.org/10.1364/3D.2023.JW2A.40",
  19: "https://indico.cern.ch/event/1188041/contributions/5383231/",
  18: "https://doi.org/10.1109/MWSCAS54063.2022.9859409",
  17: "https://doi.org/10.1109/IETC54973.2022.9796812",
  16: "https://doi.org/10.1109/CICC51472.2021.9431525",
  15: "https://doi.org/10.1109/CICC48029.2020.9075917",
  14: "https://doi.org/10.1109/ISCAS45731.2020.9181160",
  13: "https://doi.org/10.1109/MWSCAS48704.2020.9184542",
  12: "https://doi.org/10.1109/MWSCAS48704.2020.9184626",
  11: "https://doi.org/10.1109/IETC47856.2020.9249065",
  10: "https://doi.org/10.1109/IETC47856.2020.9249166",
  9: "https://doi.org/10.1109/ESSCIRC.2019.8902621",
  6: "https://youtu.be/f_27RLyN6HE",
  5: "https://player.vimeo.com/video/272568757",
  4: "https://doi.org/10.1109/TCSII.2016.2642820",
  3: "https://ieeexplore.ieee.org/document/6578734",
  2: "https://doi.org/10.1109/NSSMIC.2009.5402365",
  1: "https://doi.org/10.1109/NSSMIC.2009.5401663",
};

const conferenceText = `
[47] JuHang Kim, Parker Allred, Laurent Blanquart, and Shiuh-hua Wood Chiang, “Adaptive photoreceptor for false event suppression of event-based sensors,” IEEE International Midwest Symposium on Circuits and Systems (MWSCAS), 2026.
[46] Collin Lambert, Jeffrey Goeders, Michael Wirthlin, Long Kong, and Shiuh-hua Wood Chiang, “Open-source circuit radiation effects (OSCRE) framework with single-event latch-up modeling and simulations,” IEEE International Midwest Symposium on Circuits and Systems (MWSCAS), 2026.
[45] Eric Christie, Hyrum Jardine, Chase Miner, Shiuh-hua Wood Chiang, and Aaron Hawkins, “Charge detection mass spectrometry (CDMS) of micron-sized particles using printed circuit board electrodes,” IEEE International Midwest Symposium on Circuits and Systems (MWSCAS), 2026.
[44] Ziyuan Guo, Eric Christie, Yen-Cheng Kuan, Long Kong, and Shiuh-hua Wood Chiang, “An enhanced-bandwidth noise-shaping SAR ADC using RC-tracking circuit as amplifier,” IEEE International Symposium on Circuits and Systems (ISCAS), May 2026.
[43] Yang Chu, Yixin Song, Jace Rozsa, Parker Allred, Aaron Hawkins, and Shiuh-hua Wood Chiang, “Recent advances in charge amplifiers for particle detection,” IEEE International VLSI Symposium on Technology, Systems, and Applications (VLSI TSA), Apr. 2026. (Invited paper)
[42] Chase Miner, Hyrum Jardine, Eric Christie, Shiuh-hua Wood Chiang, and Aaron Hawkins, “Improved analysis for charge detection mass spectrometry (CDMS) of micron-sized particles,” IEEE Intermountain Engineering, Technology and Computing (IETC), May 2026.
[41] Sharisse Poff, Nicholas Allen, Jacob Anderson, Yi-Kai Wu, Benjamin Boyack, Chuan-Tai Chou, Armin Tajalli, Karl Warnick, David Anderson, Chia-Hung Chen, Marcus Julian, Robert Davis, and Shiuh-hua Wood Chiang, “An active quasi-circulator IC with source-follower DAC for 1–255 MHz spectroscopic impedance plethysmography,” IEEE European Solid-State Electronics Research Conference (ESSERC), Sep. 2025.
[40] Parker Allred, David Nichols, Collin Lambert, Ammon Wolfert, Soojin Kim, Matthew Linford, Barry Lunt, and Shiuh-hua Wood Chiang, “Rapid prototyping of analog spiking neuron for MNIST classification using hardware-in-the-loop,” IEEE International Midwest Symposium on Circuits and Systems (MWSCAS), Aug. 2025.
[39] Jacob Anderson, David Nichols, Nicholas Allen, Sharisse Poff, David Anderson, Brian Jensen, Richard Vanfleet, Robert Davis, and Shiuh-Hua Wood Chiang, “Neural network-based nonlinearity calibration in sub-Newton, low-force sensors for wearables,” IEEE International Midwest Symposium on Circuits and Systems (MWSCAS), Aug. 2025.
[38] Behdad Jamadi, Shiuh-hua Wood Chiang, Farzad Ordubadi, and Armin Tajalli, “LC VCO design optimization flow using C/ID,” IEEE International Midwest Symposium on Circuits and Systems (MWSCAS), Aug. 2025.
[37] Kanta Yoshioka, Parker Allred, Taylor Barton, Bibhu Datta Sahoo, Yen-Cheng Kuan, Shiuh-Hua Wood Chiang, and Hakaru Tamukoh, “Reservoir computing with VCO-based spiking neurons for regression and classification,” IEEE International Symposium on Circuits and Systems (ISCAS), May 2025.
[36] Collin Lambert, Jacob Anderson, David Nichols, Parker Allred, Sharisse Poff, Jeffrey Goeders, Michael Wirthlin, and Shiuh-Hua Wood Chiang, “Open-source circuit radiation effects (OSCRE) simulation framework: design and applications,” IEEE International Symposium on Circuits and Systems (ISCAS), May 2025.
[35] Sharisse Poff, Jacob Anderson, Benjamin Boyack, David Anderson, Robert Davis, and Shiuh-hua Wood Chiang, “Multirate filtering for pulsatile bioimpedance signals with MHz excitation,” IEEE International Microwave Biomedical Conference (IMBioC), Apr. 2025.
[34] Ziyuan Guo, Sharisse Poff, Jared Marchant, and Shiuh-hua Wood Chiang, “Residue amplifier gain error duplication and cancellation for two-step pipelined ADCs,” IEEE International Microwave Biomedical Conference (IMBioC), Apr. 2025.
[33] Trevor Reay, Michelle Pyle, John Carmen, Taylor Barton, Nina Weisse-Bernstein, John Smedley, Erik Muller, Ryan Tappero, Richard Sandberg, and Shiuh-Hua Wood Chiang, “A compact, highly scalable, low-power, and multi-channel charge digitizer for beam profile monitoring,” IEEE International Midwest Symposium on Circuits and Systems (MWSCAS), Aug. 2024. (Invited paper)
[32] Eric Christie, Shea Smith, Long Kong, Chia-Hung Chen, and Shiuh-hua Wood Chiang, “A review on ultra-low-supply-voltage analog-to-digital converters,” IEEE Midwest Symposium on Circuits and Systems (MWSCAS), Aug. 2024. (Invited paper)
[31] Sai Sanjeet, Sanchari Das, Shiuh-Hua Wood Chiang, Masahiro Fujita, and Bibhu Datta Sahoo, “Systematic design of ring VCO-based SNN—translating training parameters to circuits,” IEEE International Midwest Symposium on Circuits and Systems (MWSCAS), Aug. 2024.
[30] Jared Marchant, Christian Carver, Austin Barlow, Benjamin Fisher, John Serafini, Nicholas Peters, Ryan Camacho, and Shiuh-hua Wood Chiang, “Modeling and validation of offset cancellation for hybrid photonic-electronic transimpedance amplifier using all-electronic circuits,” IEEE International Symposium on Circuits and Systems (ISCAS), May 2024.
[29] Eric Christie, Hyrum Jardine, Austin Barlow, Clayton Armstrong, Parker Allred, Yixin Song, Daniel Austin, Shiuh-hua Wood Chiang, and Aaron Hawkins, “Charge detection mass spectrometry (CDMS) of microparticles,” IEEE Intermountain Engineering, Technology and Computing (IETC), May 2024.
[28] Christian Carver, Benjamin Fisher, Jared Marchant, Shiuh-Hua Wood Chiang, and Ryan Camacho, “Differential homodyne detection using an integrated photonics chip,” IEEE Conference on Lasers and Electro-Optics (CLEO), May 2024.
[27] Barry Lunt, Matthew Linford, and Shiuh-hua Wood Chiang, “How long is long-term?—an update,” Proceedings of Archiving 2024 Conference, Apr. 2024.
[26] Shea Smith, Taylor Barton, Yen-Cheng Kuan, Armin Tajalli, Mau-Chung Frank Chang, and Shiuh-hua Wood Chiang, “A 0.12-V 200-Hz-BW 10-bit ADC using quad-channel VCO and interpolation linearization,” IEEE Asian Solid-State Circuits Conference (A-SSCC), Nov. 2023.
[25] Shea Smith, Armin Tajalli, and Shiuh-hua Wood Chiang, “A VCO linearization technique using dual-VCO and interpolation for time-based ADCs,” IEEE International Midwest Symposium on Circuits and Systems (MWSCAS), Aug. 2023.
[24] Taylor Barton, Yen-Cheng Kuan, and Shiuh-hua Wood Chiang, “A multi-stage zero-crossing-based amplifier using floating-inverter amplifier with background offset calibration and self-timed loop,” IEEE International Midwest Symposium on Circuits and Systems (MWSCAS), Aug. 2023.
[23] Cheng-Yu Chiang, Chia-Lin Hu, Mark Po-Hung Lin, Yu-Szu Chung, Shyh-Jye Jou, Jieh-Tsorng Wu, Shiuh-hua Wood Chiang, Chien-Nan Liu, and Hung-Ming Chen, “On automating finger-cap array synthesis with optimal parasitic matching for custom SAR ADC,” IEEE Asia and South Pacific Design Automation Conference (ASP-DAC), Jan. 2023.
[22] Sharisse Poff, Daniel Tebbs, Robert Davis, and Shiuh-hua Wood Chiang, “Pulsatile impedance monitoring circuit,” IEEE Intermountain Engineering, Technology, and Computing Conference (IETC), May 2023. (Best Paper Award)
[21] Benjamin Fisher, Benjamin Arnesen, Tyler Stowell, Jared Marchant, Christian Carver, Ryan Camacho, and Shiuh-hua Wood Chiang, “Co-design of transimpedance amplifiers and photonic quantum random number generators,” IEEE Intermountain Engineering, Technology, and Computing Conference (IETC), May 2023. (2nd-Best Paper Award)
[20] Abigail Mae Hardy, Nicholas J. Hartley, Daniel Hodge, Sean Sheehan, Eric Christie, Taylor Buckway, David Allred, Michael Ware, Shiuh-hua Wood Chiang, Alex Halavanau, Hilary Tarvin, Joseph Wunschel, Yuming Xiao, Paul Chow, Arianna E. Gleason, Ryan Camacho, Gary Walker, and Richard L. Sandberg, “Evidence of parametrically down-converted photon pairs in the X-ray spectrum,” Optica Imaging Congress, Aug. 2023.
[19] Barry Lunt, Eric Christie, Shiuh-hua Wood Chiang, Robert Davis, and Matthew Linford, “Permanent digital data storage: an overview and report,” CERN PV2023, May 2023.
[18] Daniel Kwabena Yirenya-Tawiah, Alexander Blackham, Alison Langford, Brian Mazzeo, and Shiuh-Hua Wood Chiang, “Design and measurement of a 24.5-mW, 33-mWh, 1.8-V-output solar energy harvester for Bluetooth sensor nodes,” IEEE International Midwest Symposium on Circuits and Systems (MWSCAS), Aug. 2022.
[17] Parker Allred, Juhang Kim, Yixin Song, Shiuh-Hua Wood Chiang, and Aaron Hawkins, “Charge detection mass spectrometry of micron-sized particles using a differential amplifier,” IEEE Intermountain Engineering, Technology and Computing (IETC), May 2022.
[16] Yong Qu, Wei Shu, Yen-Cheng Kuan, Shiuh-hua Wood Chiang, Yue Li, Zixian Zheng, and Joseph Chang, “A 12-W 96.1%-efficiency eFuse-based ultrafast battery charger supporting wireless and USB power inputs,” IEEE Custom Integrated Circuits Conference (CICC), Mar. 2021.
[15] Alexander Petrie, Whitney Kinnison, Yixin Song, Kent Layton, and Shiuh-hua Wood Chiang, “A 0.2-V 10-bit 5-kHz SAR ADC with dynamic bulk biasing and ultra-low-supply-voltage comparator,” IEEE Custom Integrated Circuits Conference (CICC), Mar. 2020.
[14] Yixin Song, Whitney Kinnison, Jace Rozsa, Daniel Austin, Aaron Hawkins, and Shiuh-hua Wood Chiang, “A compact measurement technique for detector capacitance of charge amplifiers,” IEEE International Symposium on Circuits and Systems (ISCAS), Oct. 2020.
[13] Jia-Sheng Huang, Yu-Cheng Huang, Chia-Wei Kao, Che-Wei Hsu, Shiuh-hua Wood Chiang, and Chia-Hung Chen, “A two-step multi-stage noise-shaping incremental analog-to-digital converter,” IEEE International Midwest Symposium on Circuits and Systems (MWSCAS), Aug. 2020. (Invited paper)
[12] Devon Webb, Yixin Song, Jace Rozsa, Elaura Gustafson, Daniel Austin, Aaron Hawkins, and Shiuh-hua Wood Chiang, “Low-noise, low-power pulse shaper for particle detection,” IEEE International Midwest Symposium on Circuits and Systems (MWSCAS), Aug. 2020. (Invited paper)
[11] Yixin Song, Jace Rozsa, Joan Magalhaes, Shea Smith, Benjamin Karlinsey, Whitney Kinnison, Elaura Gustafson, Daniel Austin, Aaron Hawkins, and Shiuh-hua Wood Chiang, “Design of common-mode feedback for high-gain charge amplifier,” IEEE Intermountain Engineering, Technology, and Computing Conference (IETC), Oct. 2020.
[10] Jace Rozsa, Yixin Song, Devon Webb, Naomi Debaene, Austin Kerr, Elaura Gustafson, Tabitha Caldwell, Halle Murray, Daniel Austin, Shiuh-hua Wood Chiang, and Aaron Hawkins, “A verified simulation method for image charge detection with non-cylindrical electrodes,” IEEE Intermountain Engineering, Technology, and Computing Conference (IETC), Oct. 2020.
[9] Eric Swindlehurst, Hunter Jensen, Alexander Petrie, Yixin Song, Yen-Cheng Kuan, Mau-Chung Frank Chang, Jieh-Tsorng Wu, and Shiuh-hua Wood Chiang, “An 8-bit 10-GHz 21-mW time-interleaved SAR ADC with grouped DAC capacitors and dual-path bootstrapped switch,” IEEE European Solid-State Circuits Conference (ESSCIRC), Sep. 2019.
[8] Elaura Gustafson, Halle Murray, Yixin Song, Jace Rozsa, Shiuh-hua Wood Chiang, Aaron Hawkins, and Daniel Austin, “Charge detection mass spectrometry of microparticles using printed circuit board electrode arrays,” American Society for Mass Spectrometry (ASMS), Jun. 2019.
[7] Yixin Song, Justin Chu, Joan Magalhaes, Jacob Nowjack, Jace Rozsa, Eric Swindlehurst, Sanjiv Pant, Kent Layton, Xiao Wang, Nathan Porter, Edgar Lee, Steve Lammert, Milton Lee, Aaron Hawkins, and Shiuh-hua Wood Chiang, “High-pressure solid-state ion detector with 10 uV/e- gain and 180-e- noise,” American Society for Mass Spectrometry (ASMS), Jun. 2019.
[6] Devon Janke, Andrew Monk, Eric Swindlehurst, Kent Layton, and Shiuh-hua Wood Chiang, “A 9-bit 10-MHz 28-µW SAR ADC using tapered bit periods and a partially interdigitated DAC,” IEEE International Symposium on Circuits and Systems (ISCAS), May 2019.
[5] Nathan Whitehead, Yixin Song, and Shiuh-hua Wood Chiang, “Direct measurement of high-gain and complementary charge-steering amplifiers,” IEEE International Symposium on Circuits and Systems (ISCAS), May 2018.
[4] Danilo Bustamante, Devon Janke, Eric Swindlehurst, and Shiuh-hua Wood Chiang, “High-precision, mixed-signal mismatch measurement of metal-oxide-metal capacitors,” IEEE International Symposium on Circuits and Systems (ISCAS), May 2017.
[3] Shiuh-hua Wood Chiang, Hyuk Sun, and Behzad Razavi, “A 10-bit 800-MHz 19-mW CMOS ADC,” IEEE Symposia on VLSI Technology and Circuits (VLSI), pp. 100-101, Jun. 2013.
[2] Shiuh-hua Wood Chiang and Stuart Kleinfelder, “Scaling and design of a 16-mega-pixel CMOS image sensor for electron microscopy,” IEEE Nuclear Science Symposium (NSS), pp. 1249-1256, Nov. 2009.
[1] Wei Huang, Shiuh-hua Wood Chiang, and Stuart Kleinfelder, “Waveform digitization with programmable windowed real-time trigger capability,” IEEE Nuclear Science Symposium (NSS), pp. 422-427, Nov. 2009.
`;

export const publicationSections: PublicationSection[] = [
  {
    heading: "Journals:",
    entries: entriesFromText(journalText, journalLinks),
  },
  {
    heading: "Conferences:",
    entries: entriesFromText(conferenceText, conferenceLinks, [5, 6]),
  },
];

export const patents: Publication[] = [
  {
    citation:
      "Time-interleaved successive approximation register analog to digital converter with grouped digital to analog capacitors, US Patent 11101814, 2021.",
    href: "https://patents.google.com/patent/US11101814B2",
    linkLabel: "Link",
  },
  {
    citation: "Solid-state charge detector, US Patent 16889700, 2022.",
    href: "https://patents.google.com/patent/US11443930B2",
    linkLabel: "Link",
  },
];

export const news: ExternalLink[] = [
  { label: "BYU graduate students and Dr. Chiang break records with lowest supply voltage ADC", href: "https://ece.byu.edu/department-news/byu-graduate-students-and-dr-chiang-break-records-with-lowest-supply-voltage-adc" },
  { label: "BYU Students bring home top prize at i-ETC Conference", href: "https://ece.byu.edu/department-news/byu-students-bring-home-top-prize-at-i-etc-conference" },
  { label: "能效比提升超两倍，全球最高效ADC芯片问世", href: "https://view.inews.qq.com/w2/20210522A04L5400" },
  { label: "全球最高效ADC芯片问世，国内外ADC芯片发展差在哪？", href: "https://ee.ofweek.com/2021-05/ART-11000-2810-30500001.html" },
  { label: "High speed chip claimed as world’s most efficient", href: "https://www.eurekamagazine.co.uk/design-engineering-news/high-speed-chip-claimed-as-worlds-most-efficient/237442/" },
  { label: "BYU-led research team develops world’s most power-efficient ADC microchip", href: "https://www.devdiscourse.com/article/technology/1582806-byu-led-research-team-develops-worlds-most-power-efficient-adc-microchip" },
  { label: "BYU researchers create world’s most power-efficient high-speed ADC microchip", href: "https://news.byu.edu/byu-researchers-create-worlds-most-power-efficient-high-speed-adc-microchip" },
  { label: "BYU to provide NASA with critical research for future human missions to Mars", href: "https://www.ksl.com/article/46584243/byu-to-provide-nasa-with-critical-research-for-future-human-missions-to-mars" },
  { label: "BYU Helping NASA Prep for Human Mission to Mars", href: "https://www.usnews.com/news/best-states/utah/articles/2019-07-04/byu-helping-nasa-prep-for-human-mission-to-mars" },
  { label: "BYU researchers helping NASA prep for human mission to Mars", href: "https://www.heraldextra.com/news/local/education/college/byu/byu-researchers-helping-nasa-prep-for-human-mission-to-mars/article_cd51f307-1c57-5b17-8d7f-f59edb32459b.html" },
  { label: "BYU helps NASA prep for human mission to Mars through study of martian dust particles", href: "https://www.deseret.com/2019/6/30/8935152/byu-helps-nasa-prep-for-human-mission-to-mars-through-study-of-martian-dust-particles" },
  { label: "NASA turns to BYU for critical Mars research ahead of human missions", href: "https://news.byu.edu/news/nasa-turns-byu-critical-mars-research-ahead-human-missions" },
  { label: "Mars dust hazards; new BYU device will measure Martian dust", href: "https://www.youtube.com/watch?v=I4DNVKx8IDM" },
  { label: "BYU helping NASA prep for human mission to Mars", href: "https://www.apnews.com/ff9b140bbd174ef08205617b45b121c2" },
];
