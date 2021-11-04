<template>
    <div class = "menubar-container">
    <Menubar :model="items" >

        <template #end>
	        <InputText placeholder="Search" type="text" />
	    </template>
    </Menubar>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            items:[
                {
                    label:'Home',
                    icon:'pi pi-fw pi-home',
                    to:{name:'Home'}

                },
                {
                    label:'Pets',
                    items:[
                        {
                        label: 'Register Pet',
                        icon:'pi pi-fw pi-plus',
                        to:{name:'RegisterPet'}
                    },
                    {
                        label: 'my pets',
                        icon:'pi pi-fw pi-eye',
                        to:{name:'Pets'}
                    }
                    ]
                },
                {
                    label:'Appointments',
                    icon:'pi pi-fw pi-calendar',
                    items:[
                        {
                        label:'Make Appointment',
                        icon:'pi pi-fw pi-plus',
                        to:{name:'NewAppointment'}
                    },
                    {
                        label: 'View Schedule',
                        icon:'pi pi-fw pi-eye',
                        to:{name:'Appointments'}
                    }
                    ]
                }

            ]
        }
    }
    
}
</script>