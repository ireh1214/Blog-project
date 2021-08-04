import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import Link from "@ckeditor/ckeditor5-link/src/link";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Font from "@ckeditor/ckeditor5-font/src/font";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import List from "@ckeditor/ckeditor5-list/src/list";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import FindAndReplace from "@ckeditor/ckeditor5-find-and-replace/src/findandreplace";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline";
import TodoList from "@ckeditor/ckeditor5-list/src/todolist";
import SourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting";

/* import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter"; */

import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter";
import "@ckeditor/ckeditor5-build-classic/build/translations/ko";
import dotenv from "dotenv";

dotenv.config();

export const editorConfiguration = {
  plugins: [
    Essentials,
    TodoList,
    HorizontalLine,
    FindAndReplace,
    Paragraph,
    Bold,
    Code,
    Italic,
    Heading,
    Indent,
    IndentBlock,
    BlockQuote,
    Font,
    Alignment,
    List,
    Link,
    MediaEmbed,
    PasteFromOffice,
    Image,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    ImageResize,
    SimpleUploadAdapter,
    Table,
    TableToolbar,
    TextTransformation,
    SourceEditing,
  ],

  toolbar: [
    "fontfamily",
    "|",
    "fontSize",
    "fontColor",
    "fontBackgroundColor",
    "|",
    "bold",
    "italic",
    "code",
    "HorizontalLine",
    "|",
    "alignment",
    "outdent",
    "indent",
    "bulletedList",
    "todoList",
    "blockQuote",
    "|",
    "link",
    "findAndReplace",
    "insertTable",
    "imageUpload",
    "mediaEmbed",
    "|",
    "undo",
    "redo",
    "sourceEditing",
  ],

  fontFamily: {
    options: [
      "Noto Sans KR",
      "BlackHanSans",
      "G마켓 산스",
      "빛의계승자",
      "코트라고딕체",
      "쿠키런",
      "",
      "Christian Heedlay",
      "GettingBetter",
      "Moonrising",
      "Rodrigues",
      "BadSignal",
      "Magnificent",
    ],
    suppertAllValues: true,
  },

  fontSize: {
    options: [
      9, 10, 12, 14, 16, 18, 20, 21, 24, 29, 31, 33, 35, 36, 48, 60, 65, 72, 80,
      90, 100, 150, 200,
    ],
  },

  alignment: {
    options: ["justify", "left", "center", "right"],
  },

  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },

  image: {
    resizeUnit: "px",

    toolbar: [
      "imageStyle:alignLeft",

      "imageStyle:full",

      "imageStyle:alignRight",

      "|",

      "imageTextAlternative",
    ],

    styles: ["full", "alignLeft", "alignRight"],
  },

  typing: {
    transformations: {
      remove: [
        "enDash",

        "emDash",

        "oneHalf",

        "oneThird",

        "twoThirds",

        "oneForth",

        "threeQuarters",
      ],
    },
  },

  language: "ko",

  simpleUpload: {
    uploadUrl: `${process.env.REACT_APP_BASIC_SERVER_URL}/api/post/image`,

    // Headers sent along with the XMLHttpRequest to the upload server.

    headers: {
      "X-CSRF-TOKEN": "CSFR-Token",
    },
  },
};

export const ReadOnly_Configuration = {
  toolbar: ["heading"],

  heading: {},
};
