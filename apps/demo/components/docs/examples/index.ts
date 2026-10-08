// Registry of live examples. The docs read each file's source to show it in the "Code" tab.
import type { ComponentType } from "react"

import AccordionBasic from "./accordion/basic"
import AccordionMultiple from "./accordion/multiple"
import AlertBasic from "./alert/basic"
import AlertVariants from "./alert/variants"
import AvatarBasic from "./avatar/basic"
import AvatarGroup from "./avatar/group"
import BadgeVariants from "./badge/variants"
import BadgeWithIcon from "./badge/with-icon"
import ButtonAsLink from "./button/as-link"
import ButtonSizes from "./button/sizes"
import ButtonSoft from "./button/soft"
import ButtonStatus from "./button/status"
import ButtonVariants from "./button/variants"
import ButtonWithIcon from "./button/with-icon"
import CalendarBasic from "./calendar/basic"
import CalendarRange from "./calendar/range"
import CardBasic from "./card/basic"
import CardHorizontal from "./card/horizontal"
import CardImageOverlay from "./card/image-overlay"
import CardImageTop from "./card/image-top"
import CardProduct from "./card/product"
import CardProfile from "./card/profile"
import CardShadowDepths from "./card/shadow-depths"
import CardVariants from "./card/variants"
import CardWithAction from "./card/with-action"
import CheckboxBasic from "./checkbox/basic"
import ComboboxBasic from "./combobox/basic"
import CommandBasic from "./command/basic"
import CommandDialog from "./command/dialog"
import DataTableAdvanced from "./data-table/advanced"
import DataTableBasic from "./data-table/basic"
import DatePickerBasic from "./date-picker/basic"
import DatePickerLocale from "./date-picker/locale"
import DialogBasic from "./dialog/basic"
import DialogConfirm from "./dialog/confirm"
import DropdownMenuBasic from "./dropdown-menu/basic"
import DropdownMenuRadioGroup from "./dropdown-menu/radio-group"
import InputBasic from "./input/basic"
import InputStates from "./input/states"
import InputWithIcon from "./input/with-icon"
import LabelBasic from "./label/basic"
import NativeSelectBasic from "./native-select/basic"
import PaginationBasic from "./pagination/basic"
import PopoverBasic from "./popover/basic"
import PopoverShare from "./popover/share"
import ProgressBasic from "./progress/basic"
import ProgressCustomColor from "./progress/custom-color"
import RadioGroupBasic from "./radio-group/basic"
import RadioGroupCards from "./radio-group/cards"
import SelectBasic from "./select/basic"
import SelectGroups from "./select/groups"
import SeparatorBasic from "./separator/basic"
import SheetBasic from "./sheet/basic"
import SheetSides from "./sheet/sides"
import SkeletonBasic from "./skeleton/basic"
import SkeletonCard from "./skeleton/card"
import SliderBasic from "./slider/basic"
import SliderRange from "./slider/range"
import SpinnerBasic from "./spinner/basic"
import StepsBasic from "./steps/basic"
import StepsVertical from "./steps/vertical"
import SwitchBasic from "./switch/basic"
import TableBasic from "./table/basic"
import TablesStandard from "./tables/standard"
import TabsBasic from "./tabs/basic"
import TextareaBasic from "./textarea/basic"
import TimelineBasic from "./timeline/basic"
import ToastBasic from "./toast/basic"
import ToastTypes from "./toast/types"
import TooltipBasic from "./tooltip/basic"
import TypographyBlockquote from "./typography/blockquote"
import TypographyH1 from "./typography/h1"
import TypographyH2 from "./typography/h2"
import TypographyH3 from "./typography/h3"
import TypographyH4 from "./typography/h4"
import TypographyInlineCode from "./typography/inline-code"
import TypographyLargeSmallMuted from "./typography/large-small-muted"
import TypographyLead from "./typography/lead"
import TypographyLink from "./typography/link"
import TypographyList from "./typography/list"
import TypographyP from "./typography/p"

export const examples: Record<string, ComponentType> = {
  "accordion/basic": AccordionBasic,
  "accordion/multiple": AccordionMultiple,
  "alert/basic": AlertBasic,
  "alert/variants": AlertVariants,
  "avatar/basic": AvatarBasic,
  "avatar/group": AvatarGroup,
  "badge/variants": BadgeVariants,
  "badge/with-icon": BadgeWithIcon,
  "button/as-link": ButtonAsLink,
  "button/sizes": ButtonSizes,
  "button/soft": ButtonSoft,
  "button/status": ButtonStatus,
  "button/variants": ButtonVariants,
  "button/with-icon": ButtonWithIcon,
  "calendar/basic": CalendarBasic,
  "calendar/range": CalendarRange,
  "card/basic": CardBasic,
  "card/horizontal": CardHorizontal,
  "card/image-overlay": CardImageOverlay,
  "card/image-top": CardImageTop,
  "card/product": CardProduct,
  "card/profile": CardProfile,
  "card/shadow-depths": CardShadowDepths,
  "card/variants": CardVariants,
  "card/with-action": CardWithAction,
  "checkbox/basic": CheckboxBasic,
  "combobox/basic": ComboboxBasic,
  "command/basic": CommandBasic,
  "command/dialog": CommandDialog,
  "data-table/advanced": DataTableAdvanced,
  "data-table/basic": DataTableBasic,
  "date-picker/basic": DatePickerBasic,
  "date-picker/locale": DatePickerLocale,
  "dialog/basic": DialogBasic,
  "dialog/confirm": DialogConfirm,
  "dropdown-menu/basic": DropdownMenuBasic,
  "dropdown-menu/radio-group": DropdownMenuRadioGroup,
  "input/basic": InputBasic,
  "input/states": InputStates,
  "input/with-icon": InputWithIcon,
  "label/basic": LabelBasic,
  "native-select/basic": NativeSelectBasic,
  "pagination/basic": PaginationBasic,
  "popover/basic": PopoverBasic,
  "popover/share": PopoverShare,
  "progress/basic": ProgressBasic,
  "progress/custom-color": ProgressCustomColor,
  "radio-group/basic": RadioGroupBasic,
  "radio-group/cards": RadioGroupCards,
  "select/basic": SelectBasic,
  "select/groups": SelectGroups,
  "separator/basic": SeparatorBasic,
  "sheet/basic": SheetBasic,
  "sheet/sides": SheetSides,
  "skeleton/basic": SkeletonBasic,
  "skeleton/card": SkeletonCard,
  "slider/basic": SliderBasic,
  "slider/range": SliderRange,
  "spinner/basic": SpinnerBasic,
  "steps/basic": StepsBasic,
  "steps/vertical": StepsVertical,
  "switch/basic": SwitchBasic,
  "table/basic": TableBasic,
  "tables/standard": TablesStandard,
  "tabs/basic": TabsBasic,
  "textarea/basic": TextareaBasic,
  "timeline/basic": TimelineBasic,
  "toast/basic": ToastBasic,
  "toast/types": ToastTypes,
  "tooltip/basic": TooltipBasic,
  "typography/blockquote": TypographyBlockquote,
  "typography/h1": TypographyH1,
  "typography/h2": TypographyH2,
  "typography/h3": TypographyH3,
  "typography/h4": TypographyH4,
  "typography/inline-code": TypographyInlineCode,
  "typography/large-small-muted": TypographyLargeSmallMuted,
  "typography/lead": TypographyLead,
  "typography/link": TypographyLink,
  "typography/list": TypographyList,
  "typography/p": TypographyP,
}
