/* =====================================================
   ASHOKA COURSE PACKS
   ===================================================== */


/* ================= SHOW COURSE PACKS ================= */

function showCoursePacks() {

    hideAllSections();

    document.getElementById("branches").classList.remove("hidden");

    window.scrollTo(0, 0);
}


/* ================= HOME ================= */

function goHome() {

    hideAllSections();

    document.getElementById("home").classList.remove("hidden");

    window.scrollTo(0, 0);
}


/* ================= SHOW BRANCH ================= */

function showBranch(branch) {

    hideAllSections();

    if (branch === "CSE-AI") {

        document
            .getElementById("cse-ai")
            .classList.remove("hidden");

    }

    else if (branch === "CSE") {

        document
            .getElementById("cse")
            .classList.remove("hidden");

    }

    else {

        alert(
            branch +
            " course pack will be added soon."
        );

        document
            .getElementById("branches")
            .classList.remove("hidden");
    }

    window.scrollTo(0, 0);
}


/* =====================================================
   SUBJECT COURSE PACKS
   ===================================================== */

const subjectData = {

    ADSA: {

        icon: "🔢",

        name: "ADSA",

        faculty: "Ranganayakulamma",

        description:
            "Advanced Data Structures and Algorithms",

        modules: [
            "Introduction to Data Structures",
            "Arrays, Linked Lists and Stacks",
            "Queues and Trees",
            "Graphs and Graph Algorithms",
            "Searching and Sorting",
            "Advanced Data Structures",
            "Algorithm Analysis"
        ]
    },


    DMGT: {

        icon: "🔢",

        name: "DMGT",

        faculty: "Venkat Naidu",

        description:
            "Discrete Mathematics and Graph Theory",

        modules: [
            "Mathematical Logic",
            "Set Theory and Relations",
            "Functions",
            "Combinatorics",
            "Graph Theory",
            "Trees",
            "Recurrence Relations"
        ]
    },


    OOPJ: {

        icon: "☕",

        name: "OOPJ",

        faculty: "Rama Krishna",

        description:
            "Object Oriented Programming using Java",

        modules: [
            "Introduction to Java",
            "Classes and Objects",
            "Inheritance",
            "Polymorphism",
            "Abstraction and Encapsulation",
            "Exception Handling",
            "Collections and File Handling"
        ]
    },


    UHV: {

        icon: "🌱",

        name: "UHV",

        faculty: "Nitya",

        description:
            "Universal Human Values",

        modules: [
            "Introduction to Universal Human Values",
            "Self Exploration",
            "Harmony in the Individual",
            "Harmony in Family",
            "Harmony in Society",
            "Harmony with Nature",
            "Professional Ethics"
        ]
    },


    AI: {

        icon: "🤖",

        name: "AI",

        faculty: "M. Sameena Nazeer",

        description:
            "Artificial Intelligence",

        modules: [
            "Introduction to Artificial Intelligence",
            "AI Problems and Search",
            "Knowledge Representation",
            "Reasoning and Inference",
            "Machine Learning Basics",
            "Neural Networks",
            "Applications of Artificial Intelligence"
        ]
    }

};


/* ================= SHOW SUBJECT ================= */

function showSubject(subject) {

    hideAllSections();

    const data = subjectData[subject];

    const content =
        document.getElementById("subject-content");


    /* MODULE LIST */

    let moduleHTML = "";

    data.modules.forEach(
        function(module, index) {

            moduleHTML +=
                `
                <li>
                    <b>Module ${index + 1}:</b>
                    ${module}
                </li>
                `;
        }
    );


    /* COURSE PACK PAGE */

    content.innerHTML = `

        <div class="course-pack">

            <div class="course-pack-header">

                <div style="font-size:65px;">
                    ${data.icon}
                </div>

                <h1>
                    ${data.name} Course Pack
                </h1>

                <p>
                    ${data.description}
                </p>

                <p>
                    <strong>Faculty:</strong>
                    ${data.faculty}
                </p>

            </div>


            <div class="pack-grid">


                <!-- SYLLABUS -->

                <div class="pack-item">

                    <h3>📘 Syllabus</h3>

                    <p>
                        Complete syllabus and course
                        structure.
                    </p>

                    <a href="#"
                       class="pack-button">
                        View Syllabus
                    </a>

                </div>


                <!-- NOTES -->

                <div class="pack-item">

                    <h3>📚 Notes</h3>

                    <p>
                        Unit-wise notes and study
                        material.
                    </p>

                    <a href="#"
                       class="pack-button">
                        Open Notes
                    </a>

                </div>


                <!-- ASSIGNMENTS -->

                <div class="pack-item">

                    <h3>📝 Assignments</h3>

                    <p>
                        Assignments and practice
                        questions.
                    </p>

                    <a href="#"
                       class="pack-button">
                        View Assignments
                    </a>

                </div>


                <!-- QUESTION BANK -->

                <div class="pack-item">

                    <h3>❓ Question Bank</h3>

                    <p>
                        Important questions and
                        examination preparation.
                    </p>

                    <a href="#"
                       class="pack-button">
                        Open Question Bank
                    </a>

                </div>


                <!-- RESOURCES -->

                <div class="pack-item">

                    <h3>🔗 Resources</h3>

                    <p>
                        Books, websites, videos and
                        additional resources.
                    </p>

                    <a href="#"
                       class="pack-button">
                        View Resources
                    </a>

                </div>


                <!-- LAB -->

                <div class="pack-item">

                    <h3>💻 Lab / Programs</h3>

                    <p>
                        Practical programs and
                        laboratory material.
                    </p>

                    <a href="#"
                       class="pack-button">
                        Open Lab
                    </a>

                </div>

            </div>


            <!-- MODULES -->

            <div class="module-list">

                <h3>
                    📖 Course Modules
                </h3>

                <ul>
                    ${moduleHTML}
                </ul>

            </div>

        </div>

    `;


    document
        .getElementById("subject-pack")
        .classList.remove("hidden");


    window.scrollTo(0, 0);
}


/* ================= HIDE ALL ================= */

function hideAllSections() {

    const sections = [

        "home",
        "branches",
        "cse",
        "cse-ai",
        "subject-pack"

    ];


    sections.forEach(
        function(id) {

            document
                .getElementById(id)
                .classList.add("hidden");

        }
    );
}
