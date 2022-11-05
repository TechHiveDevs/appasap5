
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowFunds(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="name" />
<TextField source="entity" />
<ReferenceField source="userId" reference="user" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}