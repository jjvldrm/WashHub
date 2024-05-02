import React from 'react';

const UndercoatingIcon = ({ color }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 512 512"
        fill={color}
    >
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M1450 4844 c-191 -50 -366 -221 -419 -409 -6 -22 -18 -107 -26 -189
-8 -82 -16 -151 -19 -153 -2 -2 -64 26 -139 63 -128 63 -136 65 -163 53 -38
-18 -58 -61 -47 -97 7 -22 38 -42 173 -112 162 -83 165 -86 161 -115 -1 -16
-13 -36 -25 -44 -50 -35 -158 -148 -196 -206 -49 -76 -94 -196 -109 -294 -8
-50 -11 -304 -11 -799 l1 -726 -53 -13 c-112 -29 -213 -115 -269 -229 l-34
-69 -3 -600 -3 -601 24 -22 24 -22 2243 0 2244 0 23 22 24 22 -3 601 -3 600
-34 69 c-56 114 -157 200 -269 229 l-53 13 1 720 c0 471 -3 746 -10 798 -23
163 -99 313 -215 425 -38 37 -80 74 -92 82 -12 8 -23 28 -25 44 -3 29 1 32
157 111 129 66 162 87 173 111 12 26 12 35 1 59 -8 16 -27 35 -43 43 -27 12
-35 10 -163 -53 -75 -37 -138 -65 -140 -62 -2 2 -11 71 -18 154 -22 227 -70
339 -197 456 -73 68 -161 118 -253 141 -87 22 -2130 21 -2215 -1z m2125 -144
c174 -26 314 -145 358 -307 9 -32 25 -170 37 -307 l21 -249 -57 -73 c-68 -89
-102 -119 -174 -153 l-55 -26 -1146 0 -1146 0 -69 35 c-53 27 -82 51 -132 110
-35 41 -68 83 -73 93 -11 19 23 471 42 555 35 158 188 297 355 321 85 12 1953
13 2039 1z m-2519 -1027 c34 -54 138 -154 188 -183 28 -15 78 -37 111 -47 57
-17 122 -18 1200 -18 1082 0 1143 1 1208 19 108 30 203 101 298 225 32 41 45
36 114 -41 59 -66 99 -134 127 -218 21 -63 22 -82 26 -527 l3 -463 -1770 0
-1771 0 0 433 c0 485 4 520 66 647 36 71 145 200 171 200 6 0 19 -12 29 -27z
m474 -1437 c0 -13 9 -35 21 -50 41 -52 122 -25 136 44 l6 30 867 0 868 0 5
-30 c14 -69 95 -96 136 -44 12 15 21 37 21 50 l0 24 370 0 370 0 0 -200 c0
-187 -1 -201 -20 -220 -15 -15 -33 -20 -70 -20 l-50 0 0 125 c0 120 -1 127
-25 150 -32 33 -78 33 -110 0 -24 -23 -25 -30 -25 -150 l0 -125 -70 0 -70 0 0
125 c0 120 -1 127 -25 150 -29 30 -74 32 -106 6 -23 -18 -24 -27 -27 -150 l-4
-131 -52 0 c-56 0 -88 -19 -101 -60 -8 -26 11 -76 33 -87 10 -4 215 -10 457
-13 427 -5 441 -6 480 -27 53 -28 99 -78 124 -133 20 -43 21 -64 21 -567 l0
-523 -830 0 -830 0 0 354 0 355 143 119 c79 66 155 134 170 151 34 41 187 507
187 571 0 174 -211 260 -334 136 -38 -38 -46 -56 -106 -250 l-65 -210 -145
-88 c-169 -103 -183 -116 -183 -159 0 -37 40 -79 77 -79 24 0 304 167 349 209
37 33 51 62 81 158 13 43 41 131 60 195 28 90 41 118 57 123 24 8 49 -11 49
-37 0 -22 -135 -445 -149 -467 -5 -8 -85 -77 -177 -155 l-169 -141 -5 -390 -5
-390 -305 0 -305 0 -3 384 c-2 287 -5 388 -15 399 -6 8 -86 77 -177 152 l-166
138 -72 224 c-40 124 -72 234 -72 245 0 27 24 46 49 38 21 -6 21 -7 113 -309
27 -90 40 -117 73 -152 45 -49 328 -224 361 -224 12 0 33 9 48 21 20 16 26 29
26 59 0 47 -5 51 -187 162 -74 44 -137 88 -142 97 -4 9 -34 104 -67 211 -55
182 -61 198 -100 236 -95 95 -249 73 -311 -45 -37 -71 -32 -110 57 -384 63
-194 87 -255 111 -282 17 -19 94 -87 170 -151 l139 -116 0 -354 0 -354 -830 0
-830 0 0 516 c0 367 3 528 12 556 15 50 78 122 132 151 40 21 51 22 481 27
242 3 447 9 457 13 22 11 41 61 33 87 -13 41 -45 60 -101 60 l-52 0 -4 131
c-3 123 -4 132 -27 150 -32 26 -77 24 -106 -6 -24 -23 -25 -30 -25 -150 l0
-125 -70 0 -70 0 0 125 c0 120 -1 127 -25 150 -32 33 -78 33 -110 0 -24 -23
-25 -30 -25 -150 l0 -125 -50 0 c-37 0 -55 5 -70 20 -19 19 -20 33 -20 220 l0
200 370 0 370 0 0 -24z"/>
            <path d="M1605 4478 c-51 -27 -60 -84 -20 -123 l24 -25 951 0 951 0 24 25 c40
40 30 96 -22 123 -30 16 -1879 17 -1908 0z"/>
            <path d="M933 3225 c-27 -19 -37 -61 -23 -96 14 -32 37 -42 198 -89 129 -38
170 -60 194 -110 28 -56 23 -97 -16 -136 l-34 -34 -141 0 c-83 0 -150 -5 -165
-11 -50 -23 -57 -103 -13 -134 17 -12 55 -15 172 -15 185 0 228 12 297 81 106
107 101 281 -13 398 -51 53 -88 71 -256 120 -157 46 -170 47 -200 26z"/>
            <path d="M3975 3196 c-163 -49 -193 -64 -244 -115 -115 -115 -120 -293 -12
-401 68 -68 112 -80 295 -80 158 1 172 4 194 47 18 34 14 52 -17 84 l-29 29
-141 0 c-87 0 -150 4 -166 12 -76 34 -70 162 9 214 14 9 90 36 168 60 175 53
211 83 176 147 -16 31 -39 46 -68 46 -14 -1 -88 -20 -165 -43z"/>
            <path d="M1812 3137 c-29 -31 -29 -87 -1 -113 20 -18 47 -19 751 -19 l730 0
19 24 c26 32 25 82 -4 109 l-23 22 -725 0 -726 0 -21 -23z"/>
            <path d="M1816 2779 c-20 -16 -26 -29 -26 -59 0 -30 6 -43 26 -59 26 -21 33
-21 744 -21 711 0 718 0 744 21 20 16 26 29 26 59 0 30 -6 43 -26 59 -26 21
-33 21 -744 21 -711 0 -718 0 -744 -21z"/>
            <path d="M2501 2049 c-204 -40 -291 -298 -154 -458 55 -65 122 -95 213 -95 62
0 84 5 126 27 140 72 193 235 123 375 -58 117 -180 177 -308 151z m103 -163
c97 -40 103 -177 10 -221 -41 -19 -68 -19 -110 1 -91 43 -84 179 10 220 40 17
49 17 90 0z"/>
            <path d="M730 1417 c-36 -18 -53 -58 -40 -93 21 -54 18 -53 393 -54 l348 0 24
25 c33 33 32 70 -4 106 l-29 29 -334 0 c-248 0 -339 -4 -358 -13z"/>
            <path d="M3669 1401 c-36 -36 -37 -73 -4 -106 l24 -25 348 0 c375 1 372 0 393
54 13 35 -4 75 -40 93 -19 9 -110 13 -358 13 l-334 0 -29 -29z"/>
        </g>
    </svg>
);

export default UndercoatingIcon;
